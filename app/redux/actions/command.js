import { backendApiUrl } from '../../utils/utils'

export const LOAD_PRODUCTS = 'LOAD_PRODUCTS'

export const loadProducts = () => dispatch => {

  fetch(`${backendApiUrl}/products`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: LOAD_PRODUCTS,
        products: data,
      })
    })
}

export const SELECT_PRODUCT = 'SELECT_PRODUCT'

export const selectProduct = product => ({
  type: SELECT_PRODUCT,
  product,
})

export const ADD_TO_CART = 'ADD_TO_CART'

export const addToCart = product => ({
  type: ADD_TO_CART,
  product,
})

export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

export const removeFromCart = product => ({
  type: REMOVE_FROM_CART,
  product,
})

export const PURGE_CART = 'PURGE_CART'

export const purgeCart = () => ({ type: PURGE_CART })

export const validCommand = (totalCartPrice, cart, profile) => dispatch => {
  console.log(profile.money, profile.credits/100, totalCartPrice)
  if(profile.money + (profile.credits / 100) < totalCartPrice) {
    console.log("Not enough funds !")
  } else {
    dispatch(sendCommand(profile._id, cart))
    dispatch(purgeCart())
  }
}

export const UPDATE_PROFILE = 'UPDATE_PROFILE'
export const SEND_COMMAND = 'SEND_COMMAND'
export const sendCommand = (id, cart) => dispatch => {
  fetch(`${backendApiUrl}/command/${id}`, {
    method: 'POST',
    body: JSON.stringify(cart),
    headers:{
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: UPDATE_PROFILE,
        profile: data,
      })
    })
}
