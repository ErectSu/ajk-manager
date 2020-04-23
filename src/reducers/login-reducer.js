import { LOGIN_INPUT, PASSWORD_INPUT, IS_REMBER, GET_CUSTOMER } from '../store/actionTypes'

let defaultState
if (localStorage.getItem('deleteTime') >= new Date().getTime()) {
    defaultState = {
        telephone: localStorage.getItem('userName'),
        password: localStorage.getItem('password'),
        isRember: localStorage.getItem('isRember'),
        customerId: ''
    }
} else {
    defaultState = {
        telephone: '',
        password: '',
        isRember: '',
        customerId: ''
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
        case GET_CUSTOMER:
            return { ...state, customerId: action.value }
        default:
            return state
    }
}