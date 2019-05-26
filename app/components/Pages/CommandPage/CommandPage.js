// @flow
import React, { Component } from 'react';
import styles from './CommandPage.css';
import CommandTabs from '../../CommandTabs/CommandTabsContainer';
import CommandColumn from '../../CommandColumn/CommandColumn';
import LogoutButton from '../../LogoutButton/LogoutButtonContainer';

export default class CommandPage extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2 className={styles.titlebar}>Command</h2>
        <div className={styles.command}>
          <CommandTabs />
          <CommandColumn />
        </div>
        <LogoutButton />
      </div>
    );
  }
}
