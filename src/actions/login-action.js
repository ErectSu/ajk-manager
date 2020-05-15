import { Toast } from 'antd-mobile'
import { config, request } from '../utils'
import { push } from 'react-router-redux'
import { LOGIN_INPUT, PASSWORD_INPUT, SAVE_HOTELID, SAVE_TOKEN } from '../store/actionTypes'

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
                    sessionStorage.setItem('hotelName',res.dataObject.hotels[0].name)
                    const idAction = saveHotelId(res.dataObject.hotels[0].id)
                    const tokenAction = saveToken(res.dataObject.token)
                    dispatch(idAction)
                    dispatch(tokenAction)
                    dispatch(push('/home'))
                    
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

export const saveHotelId = (value) => {
    return {
        type: SAVE_HOTELID,
        value
    }
}

export const saveToken = (value) => {
    return {
        type: SAVE_TOKEN,
        value
    }
}