import React, { Component, Fragment } from 'react';
import Header from "./components/commom/Header";
import Home from "./components/commom/Home";
import Login from "./components/commom/Login";
import Register from "./components/commom/Register";
import Users from "./components/templates/Users";
import Pokemons from "./components/pokemon/Pokemons";
import Pokemon from "./components/pokemon/Pokemon";
import User from "./components/templates/User";
import EditUser from "./components/templates/EditUser";
import PrivateRoute from "./components/auth/PrivateRoute";
import { HashRouter as Router, Route, Switch} from "react-router-dom";

import {Provider} from 'react-redux'
import store from './store'
import { getLoggedUser } from './actions/auth';
import { getPokemons } from './actions/pokemon';

class App extends Component{

  componentWillMount() {
    store.dispatch(getLoggedUser());
    store.dispatch(getPokemons());
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
                <PrivateRoute exact path="/users" component={Users}/>
                <PrivateRoute exact path="/user/:id" component={User}/>
                <PrivateRoute exact path="/user/edit/:id" component={EditUser}/>
                <PrivateRoute exact path="/pokemon/all" component={Pokemons}/>
                <PrivateRoute exact path="/pokemon/:id" component={Pokemon}/>
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
