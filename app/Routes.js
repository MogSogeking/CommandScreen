import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import MainPage from './containers/MainPage';
import CommandPage from './containers/CommandPage';
import PlayPage from './containers/PlayPage';
import ExtrasPage from './containers/ExtrasPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.EXTRAS} component={ExtrasPage} />
      <Route path={routes.PLAY} component={PlayPage} />
      <Route path={routes.COMMAND} component={CommandPage} />
      <Route path={routes.MAIN_MENU} component={MainPage} />
      <Route path={routes.COUNTER} component={CounterPage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
