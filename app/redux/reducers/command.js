import {
  set,
  get,
  unset,
} from 'immutadot'

import { makeReducer } from '../../utils/utils'

import {
  LOAD_PRODUCTS,
  SELECT_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  PURGE_CART,
} from '../actions/command'


const initState = {
  products: {},
  selectedProduct: {},
  cart: {},
}

const actions = {
  [LOAD_PRODUCTS]: (state, { products }) => set(state, 'products', products),
  [SELECT_PRODUCT]: (state, { product }) => set(state, 'selectedProduct', product),
  [ADD_TO_CART]: (state, { product }) => {
    if(state.cart[product.id]) {
      const quantity = get(state, `cart.${product.id}.quantity`, 0)
      return set(state, `cart.${product.id}.quantity`, quantity+1)
    }
    return set(state, `cart.${product.id}`, Object.assign(product, { quantity: 1 }))
  },
  [REMOVE_FROM_CART]: (state, { product }) => {
    const quantity = get(state, `cart.${product.id}.quantity`, 0)

    if(quantity < 2) {
      return unset(state, `cart.${product.id}`)
    }

    return set(state, `cart.${product.id}.quantity`, quantity-1)
  },
  [PURGE_CART]: state => set(state, 'cart', {})
}

export const command = makeReducer(initState, actions)
