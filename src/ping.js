import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { PingAction } from './store/actions';
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { store } from './store';

class Ping extends Component {
    handler = () => {
        this.props.pinging ? this.props.pong() : this.props.ping()
    };
  render() {
    //   console.log(this.props.pinging)
    return (
        <div>
            <h1>Is pinging: {this.props.pinging.toString()}</h1>
            <button onClick={this.props.ping}>Press Me</button>
        </div>
    );
  }
}

function mapStateToProp(state) {
  return ({
    pinging: state.root.isPinging
  });
};
function mapDispatchToProp(dispatch) {
  return {
      ping: () => {
          dispatch(PingAction.ping())
      },
      pong: () => {
        dispatch(PingAction.pong())
      },
  };
};
export default connect(mapStateToProp, mapDispatchToProp)(Ping);
