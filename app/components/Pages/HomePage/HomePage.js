// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ipcRenderer } from 'electron'
import routes from '../../../constants/routes';
import styles from './HomePage.css';

type Props = {};

export default class HomePage extends Component<Props> {
  props: Props;

  componentDidMount() {
    ipcRenderer.on('card', this.handleCardConnection)
  }

  componentWillUnmount() {
    ipcRenderer.removeListener('card')
  }

  handleCardConnection = (e, uid) => {
    console.log(e,uid)
  }

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
