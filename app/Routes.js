import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './components/Pages/HomePage/HomePageContainer';
import MainPage from './components/Pages/MainMenuPage/MainMenuPageContainer';
import CommandPage from './components/Pages/CommandPage/CommandPageContainer';
import PlayPage from './components/Pages/PlayPage/PlayPageContainer';
import ExtrasPage from './components/Pages/ExtrasPage/ExtrasPageContainer';
import AchievementsPage from './components/Pages/AchievementsPage/AchievementsPageContainer';
import RankingPage from './components/Pages/RankingPage/RankingPageContainer'

export default () => (
  <App>
    <Switch>
      <Route exact path={routes.HOME} component={HomePage} />
      <Route path={routes.MAIN_MENU} component={MainPage} />
      <Route path={routes.COMMAND} component={CommandPage} />
      <Route path={routes.PLAY} component={PlayPage} />
      <Route path={routes.EXTRAS} component={ExtrasPage} />
      <Route path={routes.ACHIEVEMENTS} component={AchievementsPage} />
      <Route path={routes.RANKING} component={RankingPage} />
    </Switch>
  </App>
);
