import React, { Component } from 'react'

import styles from './ProductItem.css'

type Props = {
  product: object,
  selectProduct: () => {},
  addToCart: () => {},
}

export default class ProductItem extends Component<Props> {
  props: Props;

  render() {
    const { product, selectProduct, addToCart } = this.props
    return (
      <div className={styles.container} onClick={selectProduct} onDoubleClick={addToCart}>
        <h3>{product.name}</h3>
        <img src={product.image} />
      </div>
    )
  }
}