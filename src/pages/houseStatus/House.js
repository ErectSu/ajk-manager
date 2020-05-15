import React, { useState, useEffect } from 'react';
import { DatePicker } from 'antd-mobile'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions/status-action'
import './style.css'

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);

function House(props) {
    document.title = '房态'
    const { time_list, handleSure, houseActions, hotelId, beginTime, endTime, data, token } = props
    console.log(props)
    useEffect(() => {
        if (beginTime != '' && endTime != '') {
            houseActions.statusAction(token, hotelId, beginTime, endTime)
        }
    }, [beginTime, endTime])

    useEffect(() => {
        handleSure()
    }, [])

    return (
        <div className="house">
            <p className="tip">*点击昨日选择日期</p>
            <table border="0" width="100%">
                <thead>
                    <tr>
                        <th>
                            <DatePicker
                                mode="date"
                                title="选择日期"
                                extra="Optional"
                                value={now}
                                onOk={handleSure}
                            >
                                <p>昨日</p>
                            </DatePicker>
                        </th>
                        {
                            time_list.map((item, index) => {
                                return (
                                    <th key={index + item}>
                                        <p>{item.time}</p>
                                        <p>{item.week}</p>
                                        <p>{item.houses}</p>
                                    </th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item, index) => {
                            return (
                                <tr key={item + index}>
                                    {
                                        item.status == 3 ? null :
                                            <td>{item.houseName}</td>
                                    }
                                    {
                                        item.status != 3 ?
                                            time_list.map((childItem, index) => {
                                                const currentDate = new Date(childItem.selectTime).getTime()
                                                const beginDiff = currentDate - (new Date(item.inTimeStr)).getTime()
                                                const endDiff = currentDate - (new Date(item.leaveTimeStr)).getTime()
                                                const isSelect = beginDiff >= 0 && endDiff <= 0 ? true : false
                                                return (
                                                    <td className={isSelect ? "current" : ''} key={childItem + index}>
                                                        {
                                                            item.inTimeStr == childItem.selectTime ?
                                                                item.customerName : null
                                                        }
                                                    </td>
                                                )
                                            }) : null
                                    }
                                </tr>
                            )

                        })
                    }
                </tbody>
            </table>
        </div >
    )
}

const mapStateToProps = (state) => {
    return {
        time_list: state.status.time_list,
        hotelId: state.login.hotelId,
        beginTime: state.status.beginTime,
        endTime: state.status.endTime,
        data: state.status.data,
        token: state.login.token
    }
}
const mapDispatchProps = (dispatch) => {
    return {
        handleSure(value) {
            const action = actions.addTime(value)
            dispatch(action)
        },
        houseActions: bindActionCreators(actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchProps)(House)