import React, { Component, Fragment } from 'react';
import Header from "./components/commom/Header";
import Home from "./components/commom/Home";
import Login from "./components/commom/Login";
import Processos from "./components/templates/Processos";
import PrivateRoute from "./components/auth/PrivateRoute";
import { HashRouter as Router, Route, Switch} from "react-router-dom";

import {Provider} from 'react-redux'
import store from './store'

class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <div className="container">
              <Switch>
                <PrivateRoute exact path="/" component={Home}/>
                <PrivateRoute exact path="/processos" component={Processos}/>
                <Route exact path="/login" component={Login}/>
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App;
