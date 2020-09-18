import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import {Provider} from 'react-redux';
// import {ConnectedRouter} from 'react-router-redux';
import Loadable from 'react-loadable';
import AuthorizedRoute from 'components/Authorized/AuthorizedRoute';
import HotLoading from 'components/HotLoading';
import store, { history } from '../redux/store';

const BasicLayout = Loadable({
    loader: () => import('containers/BasicLayout'),
    loading: HotLoading,
});

// const RouterConfig =