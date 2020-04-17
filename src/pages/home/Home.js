import React, { Component } from 'react';
import OrderStatus from './OrderStatus'
import Menu from './Menu'
import Refresh from './Refresh'
import './style.css'

function Home(){

    return (
        <div className="home">
            <OrderStatus />
            <Menu />
            <Refresh />
        </div>
    )
}

export default Home