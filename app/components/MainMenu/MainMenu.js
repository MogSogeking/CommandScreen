// @flow
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import routes from '../../constants/routes';
import styles from './MainMenu.css';

import Brick from '../Brick/Brick';

type Props = {};

export default class MainMenu extends Component<Props> {
  props: Props;

  state = {
    redirect: false
  };

  render() {
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
        <Link to={routes.HOME}>Déconnexion</Link>
      </div>
    );
  }
}
