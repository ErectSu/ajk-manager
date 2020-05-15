import qs from 'qs'
import 'whatwg-fetch'
import 'es6-promise'
import { Toast } from 'antd-mobile'

let base
if (process.env.NODE_ENV == 'development') {
    base = '/api/'
} else {
    base = 'http://demo.live-ctrl.com/aijukex/'
}

export const config = {
    header: {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    },
    api: {
        base,
        getHotelList: 'reserva_getHotelHouses',
        getPassword: 'tenement/manager_hotel_getPassword',
        getLogin: 'hotel/login',
        cancelOrder: 'reserva_cancelOrder',
        reviseOrder: 'reserva_updateOrder',
        managerLogin: 'tenement/hotel_login',
        getManagerPsw: 'tenement/hotel_getPassword',
        getHotelStatus: 'hotel/getRoomAllocationRecord'
    }
}

export const request = {
    get(url, params) {
        if (params) {
            url = config.api.base + url + '?' + qs.stringify(params)
        }
        else {
            url = config.api.base + url
        }
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    resolve(data)
                    if (!data.success) {
                        Toast.info(data.msg)
                    }
                })
                .catch(err => reject(err))
        })
    },
    post(url, data) {
        const postUrl = config.api.base + url
        return new Promise((resolve, reject) => {
            fetch(postUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    resolve(data)
                    if (data.success) {
                        // Toast.info(data.msg)
                    }
                    else {
                        Toast.info(data.msg)
                    }
                })
                .catch(err => reject(err))
        })
    }
}
