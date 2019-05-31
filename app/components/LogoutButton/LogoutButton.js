import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import ExitToApp from '@material-ui/icons/ExitToApp'
import Button from '@material-ui/core/Button'

type Props = {
  logout: () => {},
};

export default class LogoutButton extends Component<Props> {
  props: Props

  state = {
    redirect: false,
  }

  render() {
    const { redirect } = this.state;
    const { logout } = this.props;

    if(redirect) {
      return <Redirect to="/" />;
    }

    return (
      <Button variant="contained" color="secondary" onClick={() => {
        logout()
        this.setState({ redirect: true });
      }}>
        Déconnexion
        <ExitToApp />
      </Button>
    )
  }
}