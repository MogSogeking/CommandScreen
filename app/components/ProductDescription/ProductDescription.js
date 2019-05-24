import React, { Component } from 'react'

import styles from './ProductDescription.css'

type Props = {
  product: object,
};

export default class ProductDescription extends Component<Props> {
  render() {
    const { product } = this.props

    if(!product) {
      return (
        <div className={styles.container}><p>Aucun produit sélectionné</p></div>
      )
    }

    return (
      <div className={styles.container}>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    )
  }
}