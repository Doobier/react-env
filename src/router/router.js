import React from 'react';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import Loadable from 'react-loadable';
import AuthorizedRoute from 'components/Authorized/AuthorizedRoute';
import HotLoading from 'components/HotLoading';
import store, { history } from '../redux/store';

const BasicLayout = Loadable({
    loader: () => import('containers/BasicLayout'),
    loading: HotLoading,
});
console.log(history);
const RouterConfig = () => (
  <Provider store={store}>
      <ConnectedRouter history={history}>
          <Switch>
              <AuthorizedRoute path="/" component={BasicLayout} authority={['user']} />
          </Switch>
      </ConnectedRouter>
  </Provider>
)

export default RouterConfig;