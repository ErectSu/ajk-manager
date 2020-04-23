import React, { Component } from 'react';
import { Checkbox } from 'antd-mobile'
import { connect } from 'react-redux'
import { IS_REMBER } from '../../store/actionTypes'

const CheckboxItem = Checkbox.CheckboxItem;

function Rember(props) {
    console.log(props)
    return (
        <div className="check_box">
            <CheckboxItem checked={Boolean(props.isRember)} onChange={props.handleRember}>
                记住密码
            </CheckboxItem>
        </div>
    )
}

const mapStateProps = (state) => {
    return {
        isRember: state.login.isRember
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        handleRember(e) {
            let action = {
                type: IS_REMBER,
                value: e.target.checked
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateProps, mapDispatchProps)(Rember)