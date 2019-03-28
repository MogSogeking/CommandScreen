import { makeReducer } from '../utils/utils'

import { set } from 'immutadot'

import {
  LOAD_PRODUCTS,
} from '../actions/command'


const initState = {
  products: {}
}

const actions = {
  [LOAD_PRODUCTS]: (state, { products }) => set(state, 'products', products),
}

export const command = makeReducer(initState, actions)
