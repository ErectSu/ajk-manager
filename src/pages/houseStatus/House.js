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
    const { time_list, handleSure, houseActions, hotelId } = props

    useEffect(() => {
        handleSure()
        houseActions.statusAction('', hotelId, '', '', '')
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
                    <tr>
                        <td>222</td>
                        <td>111</td>
                        <td>111</td>
                        <td>111</td>
                        <td>111</td>
                        <td>111</td>
                    </tr>
                    <tr>
                        <td>222</td>
                        <td>111</td>
                        <td>111</td>
                        <td>111</td>
                        <td>111</td>
                        <td>111</td>
                    </tr>
                    <tr>
                        <td>222</td>
                        <td>111</td>
                        <td>111</td>
                        <td>111</td>
                        <td>111</td>
                        <td>111</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        time_list: state.status.time_list,
        hotelId: state.status.hotelId
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