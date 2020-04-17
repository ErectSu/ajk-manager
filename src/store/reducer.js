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
            path: ''
        },
        {
            value: '订单',
            img: 'icons/order.png',
            path: ''
        },
        {
            value: '门锁密码',
            img: 'icons/lock_psw.png',
            path: ''
        }
    ],
    source: [
        { value: 0, label: '美团' },
        { value: 1, label: '携程' },
        { value: 2, label: '去哪儿' },
        { value: 3, label: '爱彼迎' },
        { value: 4, label: '飞猪' },
        { value: 5, label: '艺龙' },
        { value: 6, label: '途家' },
        { value: 7, label: '前台订单' },
        { value: 8, label: '公众号' },
        { value: 9, label: '其他' }
    ],
    price:'',
    sourceType:'',
    customer:'',
    tel:{
        value:'',
        status:false
    },
    idCard:''
}

export default (state = defaultState, action) => {
    if (action.type === 'COUNT_DOWN') {
        let newState = JSON.parse(JSON.stringify(state))
        setInterval(() => {
            newState.count--
        }, 1000);
        return newState
    }
    if (action.type === 'TEL_INPUT') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.tel.value = action.value
        if(newState.tel.value.replace(/\s/g, '').length < 11){
            newState.tel.status = true
        }else{
            newState.tel.status = false
        }
        return newState
    }
    if (action.type === 'PRICE_INPUT') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.price = action.value
        return newState
    }
    if (action.type === 'CUSTOMER_INPUT') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.customer = action.value
        return newState
    }
    if (action.type === 'IDCARD_INPUT') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.idCard = action.value
        return newState
    }
    if (action.type === 'SOURCE_INPUT') {
        let newState = JSON.parse(JSON.stringify(state))
        newState.sourceType = action.value
        return newState
    }
    if(action.type === 'RESET_DATA'){
        let newState = JSON.parse(JSON.stringify(state))
        newState = undefined
        console.log(newState)
        return newState
    }
    return state
}