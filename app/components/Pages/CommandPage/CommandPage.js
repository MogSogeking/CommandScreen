// @flow
import React, { Component } from 'react';
import styles from './CommandPage.css';
import CommandTabs from '../../CommandTabs/CommandTabsContainer';
import CommandColumn from '../../CommandColumn/CommandColumn';
import LogoutButton from '../../LogoutButton/LogoutButtonContainer';
import BackButton from '../../BackButton/BackButton';
import MoneyLine from '../../MoneyLine/MoneyLineContainer';

export default class CommandPage extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <div className={styles.header}>
          <BackButton redirection={'/mainMenu'} />
          <h2 className={styles.titlebar}>Command</h2>
        </div>
        <div className={styles.mainBlock}>
          <MoneyLine />
          <div className={styles.command}>
            <CommandTabs />
            <CommandColumn />
          </div>
        </div>
        <LogoutButton />
      </div>
    );
  }
}
