import React from 'react';
import LoginForm from './LoginForm'
import LoginBtn from './Button'
import './style.css'

function Login(){
    document.title = '登录'
    return (
        <div className="login">
            <LoginForm />
            <LoginBtn />
        </div>
    )
}

export default Login