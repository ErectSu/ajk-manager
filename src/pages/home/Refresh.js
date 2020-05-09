import React, { } from 'react';
import { Toast } from 'antd-mobile'
import { useHistory } from 'react-router-dom'

function Refresh() {
    let history = useHistory()

    const addOrder = () => {
        window.location.href = 'http://demo.live-ctrl.com/wechatx/#/addOrder'
    }
    const refresh = () => {
        Toast.loading('Loading...', 2, () => {
            console.log('loading complete!')
        });
    }

    return (
        <div className="add_order">
            <div className="add_btn" onClick={addOrder}>
                <div className="img_box">
                    <img src="icons/add.png" alt="" />
                </div>
                <p>新订单</p>
            </div>
            <div className="refresh" onClick={refresh}>
                <div className="img_box">
                    <img src="icons/refresh.png" alt="" />
                </div>
                <p>刷新</p>
            </div>
        </div>
    )
}
export default Refresh