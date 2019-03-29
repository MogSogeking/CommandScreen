import { get } from 'immutadot'

export const getProducts = state => get(state, 'command.products', {})

export const getSelectedProduct = state => get(state, 'command.selectedProduct', {})

export const getCart = state => get(state, 'command.cart', {})

export const getCartTotalPrice = state => {
  const cart = get(state, 'command.cart')
  const items = Object.keys(cart)
  return items.reduce((acc, item) => {
    const result = cart[item].price * cart[item].quantity
    return result + acc
  }, 0)
}