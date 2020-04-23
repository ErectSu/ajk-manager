import React, { Component } from 'react';
import { useHistory } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../../actions/login-action'
import { Toast } from 'antd-mobile'

function LoginBtn(props) {
    const { tel, psw,isRember, homeActions } = props
    console.log(props)
    function goHome() {
        if (!tel) {
            Toast.info('请输入手机号', 2)
            return
        }
        if (!psw) {
            Toast.info('请输入验证码', 2)
            return
        }
        Toast.loading('Loading...', 2, () => {
            homeActions.loginAction(tel, psw,isRember)
        });
    }

    return (
        <div className="login_btn">
            <button onClick={goHome}>登录</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tel: state.login.telephone,
        psw: state.login.password,
        isRember:state.login.isRember
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        homeActions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginBtn)