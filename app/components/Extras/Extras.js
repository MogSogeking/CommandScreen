// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import styles from './Extras.css';

type Props = {};

export default class Extras extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Extras</h2>
        <Link to={routes.HOME}>Déconnexion</Link>
      </div>
    );
  }
}
