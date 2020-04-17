import React, { Component } from 'react';
import { useHistory } from 'react-router-dom'
import { Toast } from 'antd-mobile'

function LoginBtn(props) {
    let history = useHistory()

    function goHome() {
        Toast.loading('Loading...', 2, () => {
            history.push({
                pathname: '/home',
                state: {
                    id: 1
                }
            })
        });
    }

    return (
        <div className="login_btn">
            <button onClick={goHome}>登录</button>
        </div>
    )
}

export default LoginBtn