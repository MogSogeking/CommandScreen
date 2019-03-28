import React, { Component } from 'react'

import styles from './ProductItem.css'

type Props = {
  product: object,
}

export default class ProductItem extends Component<Props> {
  props: Props;

  render() {
    const { product } = this.props
    return (
      <div className={styles.container}>
        <h3>{product.name}</h3>
        <img src={product.image} />
      </div>
    )
  }
}