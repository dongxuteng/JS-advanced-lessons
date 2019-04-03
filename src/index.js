import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import "antd/dist/antd.css";
import App from './App';
import { HashRouter as Router} from "react-router-dom";
// import CustomLink from './containers/CustomLink';
import AuthExample from './auth/AuthExample';
import Counter from './Counter';
import Todolist from './Todolist';
import {Provider} from 'react-redux';
import store from './store';


ReactDOM.render(
    <Provider store={store}>
      <Todolist/>
    </Provider>,
  document.getElementById('root')
)



// ReactDOM.render(
//     <Router>
//         <App />
//     </Router>,
//     document.getElementById('root')
// )
