import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import DoneIcon from '@material-ui/icons/Done'

type Props = {
  cart: Object,
  totalCartPrice: number,
  profile: Object,
  valid: () => void
};

export default class CommandValidation extends Component<Props> {
  props: Props

  render() {
    const { cart, totalCartPrice, profile, valid } = this.props
    return (
      <Button variant="contained" color="primary" onClick={valid.bind(this, totalCartPrice, cart, profile)} >
        Commander
        <DoneIcon />
      </Button>
    )
  }
}