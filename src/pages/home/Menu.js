import React, { Component } from 'react';
import { connect } from 'react-redux'

function Menu(props) {

    let { menu_list } = props
    return (
        <div className="menu">
            <ul>
                {
                    menu_list.map((item, index) => {
                        return (
                            <li key={index + item}>
                                <div>
                                    <img src={item.img} alt=""/>
                                </div>
                                <p>{item.value}</p>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const mapDefaultProps = (state) => {
    return {
        menu_list: state.list
    }
}

export default connect(mapDefaultProps, null)(Menu)