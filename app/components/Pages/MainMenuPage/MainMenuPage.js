// @flow
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styles from './MainMenuPage.css';

import Brick from '../../Brick/Brick';
import LogoutButton from '../../LogoutButton/LogoutButtonContainer';
import MoneyLine from '../../MoneyLine/MoneyLineContainer';
import ExpBar from '../../ExpBar/ExpBarContainer';

type Props = {
  profile: Object,
};

export default class MainMenuPage extends Component<Props> {
  props: Props;

  state = {
    redirect: false
  };

  render() {
    const { profile } = this.props;
    const { redirect } = this.state;
    if (redirect === 'command') {
      return <Redirect push to="/command" />;
    }
    if (redirect === 'play') {
      return <Redirect push to="/play" />;
    }
    if (redirect === 'extras') {
      return <Redirect push to="/extras" />;
    }
    return (
      <div className={styles.container} data-tid="container">
        <h2 className={styles.titlebar}>Main Menu</h2>
        <div className={styles.mainBlock}>
          <MoneyLine />
          <div className={styles.vbox}>
            <div className={styles.hbox}>
              <Brick
                click={() => {
                  this.setState({ redirect: 'command' });
                }}
              >
                <p>Commander</p>
              </Brick>
            </div>
            <div className={styles.hbox}>
              <Brick
                click={() => {
                  this.setState({ redirect: 'play' });
                }}
              >
                <p>Jouer</p>
              </Brick>
              <Brick
                click={() => {
                  this.setState({ redirect: 'extras' });
                }}
              >
                <p>Extras</p>
              </Brick>
            </div>
          </div>
        <ExpBar />
        </div>
        <LogoutButton />
      </div>
    );
  }
}
