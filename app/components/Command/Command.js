// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import styles from './Command.css';

type Props = {};

export default class Command extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Command</h2>
        <Link to={routes.HOME}>Déconnexion</Link>
      </div>
    );
  }
}
