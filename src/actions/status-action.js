import { ADD_TIME,GET_STATUS_DATA } from '../store/actionTypes'

export const addTime = (value) => {
    return {
        type: ADD_TIME,
        value
    }
}

export const getStatusData = (data) =>{
    return {
        type:GET_STATUS_DATA,
        data
    }
}