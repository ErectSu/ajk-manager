import { LOGIN_INPUT, PASSWORD_INPUT, IS_REMBER, GET_TOKEN, GET_HOTELID } from '../store/actionTypes'

let defaultState
if (localStorage.getItem('deleteTime') >= new Date().getTime()) {
    defaultState = {
        telephone: localStorage.getItem('userName'),
        password: localStorage.getItem('password'),
        isRember: localStorage.getItem('isRember'),
        hotelId: '',
        token: ''
    }
} else {
    defaultState = {
        telephone: '',
        password: '',
        isRember: '',
        hotelId: '',
        customerId:'',
        token: ''
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
        case GET_HOTELID:
            return { ...state, hotelId: action.value }
        case GET_TOKEN:
            return { ...state, token: action.value }
        default:
            return state
    }
}