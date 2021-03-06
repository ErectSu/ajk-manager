import { ADD_TIME, GET_STATUS_DATA } from '../store/actionTypes'
import { config, request } from '../utils'
import { Toast } from 'antd-mobile'

export const statusAction = (token, hotelId, beginDate, endDate) => {
    return (dispatch) => {
        request.post(config.api.getHotelStatus, { token: token, hotelId: hotelId, beginDate: beginDate, endDate: endDate })
            .then(res => {
                if (res.success) {
                    dispatch(getStatusData(res.dataObject.result))
                } else {
                    Toast.info(res.msg, 2)
                }
            })
    }
}

export const addTime = (value) => {
    return {
        type: ADD_TIME,
        value
    }
}

function getStatusData(data) {
    return {
        type: GET_STATUS_DATA,
        data
    }
}