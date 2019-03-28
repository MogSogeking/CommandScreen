import { get } from 'immutadot'

export const getProducts = state => get(state, 'command.products', {})

export const getSelectedProduct = state => get(state, 'command.selectedProduct', {})