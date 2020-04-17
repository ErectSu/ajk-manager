import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Toast } from 'antd-mobile';

function LoginForm(props) {
    const [code, setCode] = useState(0)
    const [tel, setTEL] = useState('') // 输入的手机号
    const [text, setText] = useState('获取密码')
    const [isSend, setIsSend] = useState(false) // 是否发送验证码

    async function clickBtn() {
        if (!tel || code != 0) {
            Toast.fail('手机号错误!')
            return
        }
        else {
            Toast.success('发送成功', 2)
            setCode(5)
            setIsSend(true)
        }
    }
    useEffect(() => {
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
                <img className="login_user" src='icons/user.png' alt="" />
                <input className="input" maxLength="11" type="text" placeholder="请输入手机号" />
            </div>
            <div className="psw_input">
                <img className="login_lock" src='icons/lock.png' alt="" />
                <input className="input" type="password" placeholder="请输入密码" />
                <button
                    className="get_psw"
                    onClick={clickBtn}
                    disabled={isSend}
                >
                    {text}
                </button>
            </div>
        </div>
    )

}

const storeDefaultProps = (state) => {
    return {
        count: state.count,
        text: state.text
    }
}

const dispatchToProps = (dispatch) => {
    return {

    }
}

export default connect(storeDefaultProps, dispatchToProps)(LoginForm)