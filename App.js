import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './js/navigator/AppNavigator';
import store from './js/redux/store/index'

export default class App extends Component {

  render() {
    return (
      <Provider
        store={store}
      >
        <AppNavigator />
      </Provider>
    );
  }
}
