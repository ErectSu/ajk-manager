import React from 'react';
import { HashRouter as Router, Route, Redirect,Switch } from 'react-router-dom'
import Login from '../pages/login/Login'
import Home from '../pages/home/Home'
import AddIndex from '../pages/add/AddInex'
import House from '../pages/houseStatus/House'

let routes = [
    {
        path: '/',
        component: Login,
        meta: {
            title: '登录'
        },
        exact: true
    },
    {
        path: '/home',
        component: Home,
        meta: {
            title: '主页'
        },
        exact: false
    },
    {
        path: '/house_status',
        component: House,
        meta: {
            title: '房态'
        },
        exact: false
    },
    {
        path: '/add',
        component: AddIndex,
        meta: {
            title: '添加订单'
        },
        exact: false
    }
]

function MyRouter() {
    return <Router>
        <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/home" component={Home} />
        <Route path="/add" component={AddIndex} />
        <Route path="/house_status" component={House} />
        {/* {
            routes.map((route, index) => {
                <Route
                    key={index}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                    render={() =>{
                        document.title = route.meta.title
                    }}
                />
            })
        } */}
        </Switch>
        {/* <Redirect to="/" /> */}
    </Router>
}

export default MyRouter