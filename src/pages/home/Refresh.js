import React, { Component } from 'react';
import { useHistory } from 'react-router-dom'

function Refresh() {
    let history = useHistory()

    return (
        <div className="add_order">
            <div className="add_btn" onClick={()=>history.push('/add')}>
                <img src="icons/add.png" alt="" />
                <p>新订单</p>
            </div>
            <div className="refresh">
                <img src="icons/refresh.png" alt="" />
                <p>刷新</p>
            </div>
        </div>
    )
}
export default Refresh