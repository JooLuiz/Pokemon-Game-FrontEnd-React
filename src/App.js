import React, { Component, Fragment } from 'react';
import Header from "./components/commom/Header";
import Home from "./components/commom/Home";
import Login from "./components/commom/Login";
import Register from "./components/commom/Register";
import Users from "./components/templates/Users";
import User from "./components/templates/User";
import EditUser from "./components/templates/EditUser";
import PrivateRoute from "./components/auth/PrivateRoute";
import { HashRouter as Router, Route, Switch} from "react-router-dom";

import {Provider} from 'react-redux'
import store from './store'
import { getLoggedUser } from './actions/auth';

class App extends Component{

  componentWillMount() {
    store.dispatch(getLoggedUser());
  }

  render(){
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Header />
            <div className="container">
              <Switch>
                <PrivateRoute exact path="/" component={Home}/>
                <Route exact path="/user/:id" component={User}/>
                <Route exact path="/user/edit/:id" component={EditUser}/>
                <Route exact path="/users" component={Users}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/register" component={Register}/>
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>
    )
  }
}

export default App;
