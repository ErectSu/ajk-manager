import { GET_HOTEL_ORDER_DATA } from '../store/actionTypes'

export const getHotelOrderDataAction = (data) => {
    return {
        type: GET_HOTEL_ORDER_DATA,
        data
    }
}