// @flow
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import routes from '../../../constants/routes';
import styles from './ExtrasPage.css';
import BackButton from '../../BackButton/BackButton'
import Brick from '../../Brick/Brick'
import LogoutButton from '../../LogoutButton/LogoutButtonContainer'

type Props = {};

export default class ExtrasPage extends Component<Props> {
  props: Props;

  state = {
    redirect: false
  };

  render() {
    const { redirect } = this.state;
    if (redirect === 'achievements') {
      return <Redirect push to="/achievements" />;
    } else if (redirect === 'ranking') {
      return <Redirect push to="/ranking" />
    }

    return (
      <div className={styles.container} data-tid="container">
        <div className={styles.header}>
          <BackButton redirection={'/mainMenu'} />
          <h2 className={styles.titlebar}>Extras</h2>
        </div>
        <div className={styles.mainBlock}>
          <div className={styles.vbox}>
            <div className={styles.hbox}>
              <Brick
                click={() => {
                  this.setState({ redirect: 'achievements' });
                }}
              >
                <p>Achievements</p>
              </Brick>
            </div>
            <div className={styles.hbox}>
              <Brick
                click={() => {
                  this.setState({ redirect: 'achievements' });
                }}
              >
                <p>Achievements</p>
              </Brick>
              <Brick
                click={() => {
                  this.setState({ redirect: 'ranking' });
                }}
              >
                <p>Ranking</p>
              </Brick>
            </div>
          </div>
        </div>
        <LogoutButton />
      </div>
    );
  }
}
