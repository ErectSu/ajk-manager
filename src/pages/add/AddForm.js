import React, { useState } from 'react';
import { connect } from 'react-redux'
import { List, InputItem, Picker, Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import { TEL_INPUT, PRICE_INPUT, CUSTOMER_INPUT, IDCARD_INPUT, SOURCE_INPUT } from '../../store/actionTypes'

function AddForm(props) {

    let { data, tel, source, onChange, idCard, price, customer, changePrice, changeCustomer, changeIdCard, changeSource } = props
    console.log(props)
    const { getFieldProps } = props.form;

    const onErrorClick = () => {
        if (tel.status) {
            Toast.info('请输入11位号码');
        }
    }

    return (

        <div className="add_form">
            <div className="form_list">
                <div className="houseNo">
                    <p>房号</p>
                    <p> 待定，住1晚（04.09——04.10）</p>
                </div>
                <List renderHeader={() => ''}>
                    <InputItem
                        {...getFieldProps('preice')}
                        type="number"
                        placeholder="0.00"
                        extra="¥"
                        value={price}
                        onChange={changePrice}
                    >价格</InputItem>
                    <Picker
                        data={data}
                        cols={1}
                        value={source}
                        onOk={changeSource}
                        {...getFieldProps('district3')}
                        className="forss"
                    >
                        <List.Item arrow="horizontal">来源</List.Item>
                    </Picker>
                    <InputItem
                        {...getFieldProps('control')}
                        placeholder="请输入姓名"
                        value={customer}
                        onChange={changeCustomer}
                    >客人</InputItem>
                    <InputItem
                        type="phone"
                        placeholder="请输入手机号码"
                        error={tel.status}
                        onErrorClick={onErrorClick}
                        onChange={onChange}
                        value={tel.value}
                    >电话</InputItem>
                    <InputItem
                        {...getFieldProps('control1')}
                        placeholder="请输入身份证号"
                        maxLength="18"
                        value={idCard}
                        onChange={changeIdCard}
                    >身份证</InputItem>
                </List>
            </div>
        </div>
    )
}

const mapDefaultProps = (state) => {
    return {
        data: state.reducer.source,
        tel: state.reducer.tel,
        price: state.reducer.price,
        customer: state.reducer.customer,
        idCard: state.reducer.idCard,
        source: state.reducer.sourceType
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        onChange(value) {
            let action = {
                type: TEL_INPUT,
                value: value
            }
            dispatch(action)
        },
        changePrice(value) {
            let action = {
                type: PRICE_INPUT,
                value: value
            }
            dispatch(action)
        },
        changeCustomer(value) {
            let action = {
                type: CUSTOMER_INPUT,
                value: value
            }
            dispatch(action)
        },
        changeIdCard(value) {
            let action = {
                type: IDCARD_INPUT,
                value: value
            }
            dispatch(action)
        },
        changeSource(value) {
            let action = {
                type: SOURCE_INPUT,
                value: value.toString()
            }
            dispatch(action)
        }
    }
}

const BasicInputExampleWrapper = createForm()(AddForm);

export default connect(mapDefaultProps, mapDispatchProps)(BasicInputExampleWrapper)