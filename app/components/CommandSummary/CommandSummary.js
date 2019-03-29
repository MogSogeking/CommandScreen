import React, { Component } from 'react'

import styles from './CommandSummary.css'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

type Props = {
  cart: object,
  removeFromCart: () => {},
  totalPrice: number,
}

export default class CommandSummary extends Component<Props> {
  props: Props

  render() {
    const { cart, removeFromCart, totalPrice } = this.props

    return (
      <div className={styles.container}>
        <div className={styles.itemDetail}>
          {Object.keys(cart).map(id => {
            return (
              <div key={cart[id].id}>
                {cart[id].name} x{cart[id].quantity} {cart[id].quantity * cart[id].price}€
                <IconButton variant="contained" color="secondary" onClick={removeFromCart.bind(this, cart[id])}>
                  <DeleteIcon />
                </IconButton>
              </div>
            )})
          }
        </div>
        <div className={styles.totalContainer}>Total: {totalPrice}€</div>
      </div>
    )
  }
}