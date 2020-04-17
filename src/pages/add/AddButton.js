import React, { Component } from 'react';
import { Toast } from 'antd-mobile'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'

function AddButton(props) {

    const { data } = props
    const saveBtn = () => {
        if(!data.price) {
            Toast.info('请输入价格',2)
            return
        }
        if(!data.sourceType) {
            Toast.info('请选择来源',2)
            return
        }
        if(!data.customer) {
            Toast.info('请输入姓名',2)
            return
        }
        if(!data.tel.value || data.tel.status) {
            Toast.info('请输入手机号',2)
            return
        }
        if(!data.idCard) {
            Toast.info('请输入身份证号',2)
            return
        }
        console.log(props)
        Toast.loading('保存中', 2, () => {
            console.log('Load complete !!!');
        });
    }

    return (
        <div className="add_button">
            <div className="cancel" onClick={props.cancel}>取消</div>
            <div className="save" onClick={saveBtn}>保存</div>
        </div>
    )
}

const mapDefaultProps = (state) => {
    return {
        data:state
    }
}
// const history = useHistory()
const mapDispatchProps = (dispatch) =>{
    return {
        cancel(){
            
            dispatch({type:'RESET_DATA'})
            dispatch(push('/home'))
            
        }
    }
}

export default connect(mapDefaultProps, mapDispatchProps)(AddButton)