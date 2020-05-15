import moment from 'moment'
import GetDateStr from '../getTime/time'
import { ADD_TIME, GET_STATUS_DATA } from '../store/actionTypes'

const defaultState = {
    time_list: [],
    data: [],
    beginTime: '',
    endTime: ''
}

export default (state = defaultState, action) => {
    switch (action.type) {
        case ADD_TIME:
            let newState = JSON.parse(JSON.stringify(state))
            let item = moment(action.value).format('YYYY-MM-DD')
            newState.time_list = []
            newState.time_list.push(GetDateStr(item, 0), GetDateStr(item, 1), GetDateStr(item, 2), GetDateStr(item, 3), GetDateStr(item, 4))
            return { ...state, time_list: newState.time_list, beginTime: newState.time_list[0].selectTime, endTime: newState.time_list[4].selectTime }
        case GET_STATUS_DATA:
            return { ...state, data: action.data }
        default:
            return state
    }
}