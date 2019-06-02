import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

type Props = {
  redirection: String,
  click: () => {},
};

export default class BackButton extends Component<Props> {
  props: Props

  state = {
    redirect: false,
  }

  render() {
    const { redirect } = this.state;
    const { redirection, click } = this.props;

    if(redirect) {
      return <Redirect to={redirection} />;
    }

    return (
      <Button variant="contained" color="secondary" onClick={() => {
        click && click()
        this.setState({ redirect: true });
      }}>
        <ArrowBackIcon />
      </Button>
    )
  }
}