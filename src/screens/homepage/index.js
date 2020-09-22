import React, { Component } from 'react';
import { Button } from "antd";
import { connect } from 'react-redux';
import {
  increment,
  decrement
} from "actions/homepage";

class App extends Component{
  incrementHandle = () => {
    this.props.increment();
  }
  decrementHandle = () => {
    this.props.decrement();
  }
  render() {
    const {count} = this.props.home;
    return (
      <div>
        <p>{count}</p>
        <Button onClick={this.incrementHandle}>+</Button>
        <Button onClick={this.decrementHandle}>-</Button>
      </div>
    )
  }
}

export default connect(
  state => ({home: state.homepage}),
  {
    increment,
    decrement
  }
)(App);