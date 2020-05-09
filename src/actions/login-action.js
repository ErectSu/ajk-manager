import { Toast } from 'antd-mobile'
import { config, request } from '../utils'
import { push } from 'react-router-redux'
import { LOGIN_INPUT, PASSWORD_INPUT, GET_HOTELID, GET_TOKEN } from '../store/actionTypes'

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
        request.post(config.api.getLogin, { username: tel, password: psw })
            .then(res => {
                if (res && res.success) {
                    Toast.info('登录成功', 2)
                    const action = getHotelId(res.dataObject.account.id)
                    // getCookie('JSESSIONID')
                    // console.log(getCookie('JSESSIONID'))
                    // const tokenAction = getToken()
                    dispatch(action)
                    // dispatch(push('/home'))
                    sessionStorage.setItem('customerId', res.dataObject.account.id)
                    sessionStorage.setItem('hotelId', res.dataObject.hotels[0].id)
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

function getCookie(name) {
    //可以搜索RegExp和match进行学习
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    console.log(document.cookie)
    if (arr = document.cookie.match(reg)) {
        
        return unescape(arr[2]);
    } else {
        return null;
    }
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

export const getHotelId = (value) => {
    return {
        type: GET_HOTELID,
        value
    }
}

export const getToken = (value) => {
    return {
        type: GET_TOKEN,
        value
    }
}