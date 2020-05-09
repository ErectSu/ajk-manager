import React, {} from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

function OrderStatus(props) {
    
    let history = useHistory()
    let { data,userName } = props
    return (
        <div className="order_status">
            <div className="user_info">
                <div className="img_box">
                    <img className="icon_login" src="icons/login.png" alt="" />
                </div>
                <p>{userName}</p>
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
        data: state.home.data,
        userName:state.login.telephone
    }
}

export default connect(mapDefaultProps, null)(OrderStatus)