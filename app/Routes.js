import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './components/Pages/HomePage/HomePageContainer';
import CounterPage from './containers/CounterPageContainer';
import MainPage from './components/Pages/MainMenuPage/MainMenuPageContainer';
import CommandPage from './components/Pages/CommandPage/CommandPageContainer';
import PlayPage from './components/Pages/PlayPage/PlayPageContainer';
import ExtrasPage from './components/Pages/ExtrasPage/ExtrasPageContainer';

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
