// @flow
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { ipcRenderer } from 'electron'
import routes from '../../../constants/routes';
import styles from './HomePage.css';

type Props = {
  checkProfile: () => {},
  isValidProfile: boolean,
};

export default class HomePage extends Component<Props> {
  props: Props;

  componentDidMount() {
    ipcRenderer.on('card', this.handleCardConnection)
  }

  componentWillUnmount() {
    ipcRenderer.removeListener('card', this.handleCardConnection)
  }

  handleCardConnection = (e, uid) => {
    const { checkProfile } = this.props
    checkProfile(uid)
  }

  render() {
    const { isValidProfile } = this.props
    if (isValidProfile) {
      return <Redirect push to="/mainMenu" />;
    }

    return (
      <div className={styles.container} data-tid="container">
        <h2>Bienvenue au Multiplayer</h2>
        <p>Passez votre carte pour commander</p>
        <Link to={routes.ACHIEVEMENTS}>Main menu</Link>
      </div>
    );
  }
}
