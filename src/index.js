import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './store'
import 'antd-mobile/dist/antd-mobile.css';
import './assets/reset.css'
import MyRouter from './route/route'

const App = (
  <Provider store={store}>
    <MyRouter />
  </Provider>
)

ReactDOM.render(App,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
