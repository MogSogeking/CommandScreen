// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Fastfood from '@material-ui/icons/Fastfood'
import LocalBar from '@material-ui/icons/LocalBar'
import LocalCafe from '@material-ui/icons/LocalCafe'
import routes from '../../../constants/routes';
import styles from './CommandPage.css';
import CommandTabs from '../../CommandTabs/CommandTabsContainer';
import CommandColumn from '../../CommandColumn/CommandColumn';

export default class CommandPage extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Command</h2>
        <div className={styles.command}>
          <CommandTabs />
          <CommandColumn />
        </div>
        <Link to={routes.HOME}>Déconnexion</Link>
      </div>
    );
  }
}
