import React from 'react';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import AddIndex from '../pages/add/AddInex'

function MyRouter() {
    return <Router>
        <Route path="/" component={Login} exact />
        <Route path="/home" component={Home} />
        <Route path="/add" component={AddIndex} />
        {/* <Redirect to="/" /> */}
    </Router>
}

export default MyRouter