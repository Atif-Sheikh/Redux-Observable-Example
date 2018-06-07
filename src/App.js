import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from './store';
import Ping from './ping';

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Ping />
      </Provider>
    );
  }
}

