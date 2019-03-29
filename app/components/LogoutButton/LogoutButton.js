import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import routes from '../../constants/routes';
import ExitToApp from '@material-ui/icons/ExitToApp'
import Button from '@material-ui/core/Button'
import styles from './LogoutButton.css'


type Props = {

}

export default class LogoutButton extends Component<Props> {
  props: Props

  state = {
    redirect: false,
  }

  render() {
    const { redirect } = this.state;

    if(redirect) {
      return <Redirect to="/home" />;
    }

    return (
      <Button variant="contained" color="secondary" onClick={() => {
        this.setState({ redirect: true });
      }}>
        Déconnexion
        <ExitToApp />
      </Button>
    )
  }
}