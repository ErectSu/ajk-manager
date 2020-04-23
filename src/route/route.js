import React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import AddIndex from '../pages/add/AddInex'
import House from '../pages/houseStatus/House'

function MyRouter() {
    return <Router>
        <Route path="/" component={Login} exact />
        <Route path="/home" component={Home} />
        <Route path="/add" component={AddIndex} />
        <Route path="/house_status" component={House} />
        {/* <Redirect to="/" /> */}
    </Router>
}

export default MyRouter