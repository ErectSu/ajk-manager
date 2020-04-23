const defaultState = {
    data: [
        {
            title: '订单',
            num: '10'
        },
        {
            title: '已住',
            num: '10'
        },
        {
            title: '入住',
            num: '10'
        },
        {
            title: '退房',
            num: '10'
        },
        {
            title: '空房',
            num: '10'
        }
    ],
    list: [
        {
            value: '房态',
            img: 'icons/house.png',
            path: '/house_status'
        },
        {
            value: '订单',
            img: 'icons/order.png',
            path: 'http://demo.live-ctrl.com/wechatx/#/hadOrder'
        },
        {
            value: '门锁密码',
            img: 'icons/lock_psw.png',
            path: 'http://demo.live-ctrl.com/wechat-lock/#/house_list'
        }
    ]
}

export default (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}