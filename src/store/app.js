import { combineReducers } from 'redux';
import reducer from './reducer';
import { RESET_DATA } from './actionTypes'
import login from '../reducers/login-reducer'
import home from '../reducers/home_reducer'
import status from '../reducers/status-reducer'

const appReducer = combineReducers({
    reducer,
    login,
    home,
    status
})

const rootReducer = (state, action) => {
    if (action.type === RESET_DATA) {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer;