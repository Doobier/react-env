import React, {Component} from 'react';
import { Route, Redirect } from "react-router-dom";
import {connect} from 'react-redux';
import Authorized from "components/Authorized/Authorized";

class AuthorizedRoute extends Component {
  render() {
    // console.info(this.props);
    const {component: Component, render, authority, ...rest} = this.props;
    // const {location} = this.props.router;
    const auth = {
      token: 'wiseapm',
      userId: 'wiseapm',
      userName: 'wiseapm',
    }
    return (
      <Authorized
        authority={authority}
        currentAuthority={auth}
        noMatch={()=>{
          window.location.href=`${window.location.origin}/user/login`
        }}
      >
        <Route {...rest} render={props => (Component ? <Component {...props} /> : render(props))} />
      </Authorized>
    )
  }
}

export default connect(state => ({login: state.login, router: state.router}))(AuthorizedRoute);