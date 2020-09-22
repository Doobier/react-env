import React, {Component} from 'react';
import { connect } from 'react-redux';

class Hello extends Component{
  render() {
    return (
      <div>hello</div>
    )
  }
}

export default connect()(Hello);