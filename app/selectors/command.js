import { get } from 'immutadot'

export const getProducts = state => get(state, 'command.products', {})
