import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Toast } from 'antd-mobile';
import * as actions from '../../actions/login-action'
import Rember from './Rember'

function LoginForm(props) {
    const [code, setCode] = useState(0)
    const [text, setText] = useState('获取密码')
    const [isSend, setIsSend] = useState(false) // 是否发送验证码
    const { tel, psw, handleTelValue, handlePswValue, getCodeActions } = props
    async function clickBtn() {

        if (!tel || code != 0) {
            Toast.fail('手机号错误!')
            return
        }
        else {
            getCodeActions.getCode(tel)
            setCode(60)
            setIsSend(true)
        }
    }
    useEffect(() => {
        console.log(props)
        let timer = null
        if (code > 0) {
            setText(text => code)
            timer = setInterval(() => {
                setCode(code => {
                    if (code == 1) {
                        clearInterval(timer)
                        setText(text => '重新发送')
                        setIsSend(false)
                    }
                    return code - 1
                })
            }, 1000);
        }
        return () => clearInterval(timer)
    })

    return (
        <div className="login_form">
            <div className="tel_input">
                <div className="img_box">
                    <img className="login_user" src='icons/user.png' alt="" />
                </div>
                <div>
                    <input
                        className="input"
                        maxLength="11"
                        type="text"
                        value={tel}
                        placeholder="请输入手机号"
                        onChange={handleTelValue}
                    />
                </div>
            </div>
            <div className="psw_input">
                <div className="img_box">
                    <img className="login_lock" src='icons/lock.png' alt="" />
                </div>
                <input
                    className="input"
                    type="password"
                    value={psw}
                    placeholder="请输入密码"
                    maxLength="6"
                    onChange={handlePswValue}
                />
                <button
                    className="get_psw"
                    onClick={clickBtn}
                    disabled={isSend}
                >
                    {text}
                </button>
            </div>
            <Rember />
        </div>
    )
}

const storeDefaultProps = (state) => {
    return {
        tel: state.login.telephone,
        psw: state.login.password,
        isRember: state.login.isRember
    }
}

const dispatchToProps = (dispatch) => {
    return {
        handleTelValue(e) {
            const action = actions.loginInputAction(e.target.value)
            dispatch(action)
        },
        handlePswValue(e) {
            const action = actions.passwordInputAction(e.target.value)
            dispatch(action)
        },
        getCodeActions: bindActionCreators(actions, dispatch)
    }
}

export default connect(storeDefaultProps, dispatchToProps)(LoginForm)