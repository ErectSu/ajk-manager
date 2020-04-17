import React, {} from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

function OrderStatus(props) {
    let history = useHistory()
    let { data } = props

    return (
        <div className="order_status">
            <div className="user_info">
                <img className="icon_login" src="icons/login.png" alt="" />
                <p>18256457525</p>
                <p onClick={() => history.push('/')}>退出</p>
            </div>
            <div className="order_info">
                <ul>
                    {
                        data.map((item, index) => {
                            return (
                                <li key={index + item}>
                                    <p>{item.title}</p>
                                    <p>{item.num}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

const mapDefaultProps = (state) => {
    return {
        data: state.data
    }
}

export default connect(mapDefaultProps, null)(OrderStatus)