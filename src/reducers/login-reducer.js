import { LOGIN_INPUT, PASSWORD_INPUT, IS_REMBER, SAVE_TOKEN, SAVE_HOTELID } from '../store/actionTypes'

let defaultState
let hotelId = sessionStorage.getItem('manager_hotelId') ? sessionStorage.getItem('manager_hotelId') : '';
let token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : '';
if (localStorage.getItem('deleteTime') >= new Date().getTime()) {
    defaultState = {
        telephone: localStorage.getItem('userName'),
        password: localStorage.getItem('password'),
        isRember: localStorage.getItem('isRember'),
        hotelId,
        token
    }
} else {
    defaultState = {
        telephone: '',
        password: '',
        isRember: '',
        hotelId,
        customerId: '',
        token
    }
}


export default (state = defaultState, action) => {
    switch (action.type) {
        case LOGIN_INPUT:
            return { ...state, telephone: action.value }
        case PASSWORD_INPUT:
            return { ...state, password: action.value }
        case IS_REMBER:
            return { ...state, isRember: action.value }
        case SAVE_HOTELID:
            sessionStorage.setItem('manager_hotelId', action.value)
            return { ...state, hotelId: action.value }
        case SAVE_TOKEN:
            sessionStorage.setItem('token', action.value)
            return { ...state, token: action.value }
        default:
            return state
    }
}