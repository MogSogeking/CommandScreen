// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

type Props = {};

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Bienvenue au Multiplayer</h2>
        <p>Passez votre carte pour commander</p>
        <Link to={routes.MAIN_MENU}>Main menu</Link>
      </div>
    );
  }
}
