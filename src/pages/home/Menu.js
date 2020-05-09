import React, { } from 'react';
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

function Menu(props) {
    const history = useHistory()
    const toOrder = (item) => {
        console.log(item)
        if (item.value == "房态") {
            history.push(item.path)
        }
        else {
            window.location.href = item.path
        }
    }

    let { menu_list } = props
    return (
        <div className="menu">
            <ul>
                {
                    menu_list.map((item, index) => {
                        return (

                            <li key={index + item} onClick={() => toOrder(item)}>
                                <div className="img_box">
                                    <img src={item.img} alt="" />
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
        menu_list: state.home.list
    }
}

export default connect(mapDefaultProps, null)(Menu)