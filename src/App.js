import React, { Component, Fragment } from 'react'
import Header from "./components/commom/Header"

import {Provider} from 'react-redux'
import store from './store'

class App extends Component{
  render(){
    return (
      <Provider store={store}>
        <Fragment>
          <Header />
        </Fragment>
      </Provider>
    )
  }
}

export default App;
