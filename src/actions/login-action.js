import { Toast } from 'antd-mobile'
import { config, request } from '../utils'
import { push } from 'react-router-redux'
import { LOGIN_INPUT, PASSWORD_INPUT,GET_CUSTOMER } from '../store/actionTypes'

export const getCode = (tel) => {
    return (dispatch) => {
        request.get(config.api.getPassword, { telephone: tel })
            .then(res => {
                if (res && res.success) {
                    Toast.info('获取密码成功', 2)
                } else {
                    Toast.info(res.msg, 2)
                }
            })
    }
}

export const loginAction = (tel, psw, isRember) => {
    return (dispatch) => {
        request.post(config.api.getLogin, { telephone: tel, password: psw })
            .then(res => {
                if (res && res.success) {
                    Toast.info('登录成功', 2)
                    getHotelAction(res.dataObject)
                    const action = getCustomerId(res.dataObject)
                    dispatch(action)
                    dispatch(push('/home'))
                    sessionStorage.setItem('customerId',res.dataObject)
                    if (isRember) {
                        localStorage.setItem('userName', tel)
                        localStorage.setItem('password', psw)
                        localStorage.setItem('isRember', isRember)
                        localStorage.setItem('deleteTime', new Date().getTime() + 7 * 24 * 3600 * 1000)
                    } else {
                        localStorage.removeItem('userName')
                        localStorage.removeItem('password')
                        localStorage.removeItem('isRember')
                    }
                } else {
                    Toast.info(res.msg, 2)
                }
            })
    }
}

function getHotelAction(customerId) {
    request.get(config.api.getHotelInfo, { customerId: customerId })
        .then(res => {
            if (res && res.success && res.dataObject.length) {
                sessionStorage.setItem('hotelId', res.dataObject[0].id)
            }
        })
}

export const loginInputAction = (value) => {
    return {
        type: LOGIN_INPUT,
        value
    }
}

export const passwordInputAction = (value) => {
    return {
        type: PASSWORD_INPUT,
        value
    }
}

export const getCustomerId = (value) =>{
    return {
        type:GET_CUSTOMER,
        value
    }
}