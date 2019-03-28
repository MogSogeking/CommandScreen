import { makeReducer } from '../utils/utils'

import { set } from 'immutadot'

import {
  LOAD_PRODUCTS, SELECT_PRODUCT,
} from '../actions/command'


const initState = {
  products: {}
}

const actions = {
  [LOAD_PRODUCTS]: (state, { products }) => set(state, 'products', products),
  [SELECT_PRODUCT]: (state, { product }) => set(state, 'selectedProduct', product)
}

export const command = makeReducer(initState, actions)
