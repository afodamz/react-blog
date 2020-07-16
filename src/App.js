import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route} from 'react-router-dom';
import Index from './components/Index';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Default from './components/Default';
import Main from './components/pages/Main';
import { Provider } from 'react-redux';
import loginReducer from './components/reducers/loginReducer';
import { createStore } from 'redux';


export default class App extends Component {
  store = createStore(loginReducer);
  render() {
    return (
      <Provider store={this.store}>
      <Switch>
        <Route exact path="/" component={Index}/>
        <Route exact path="/Login" component={Login}/>
        <Route path="/Register" component={Register}/>
        <Route path="/Main" component={Main}/>
        <Route component={Default}/>
      </Switch>
      </Provider>
    )
  }
}

