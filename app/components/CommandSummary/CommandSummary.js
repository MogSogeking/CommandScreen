import React, { Component } from 'react'

import styles from './CommandSummary.css'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

type Props = {
  cart: object,
  removeFromCart: () => {},
}

export default class CommandSummary extends Component<Props> {
  props: Props

  render() {
    const { cart, removeFromCart } = this.props

    return (
      <div className={styles.container}>
        <ul>
          {Object.keys(cart).map(id => {
            return (
              <li key={cart[id]}>
                {cart[id].name} x{cart[id].quantity}
                <IconButton variant="contained" color="secondary" onClick={removeFromCart.bind(this, cart[id])}>
                  <DeleteIcon />
                </IconButton>
              </li>
            )})
          }
        </ul>
      </div>
    )
  }
}