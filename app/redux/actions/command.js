export const LOAD_PRODUCTS = 'LOAD_PRODUCTS'

export const loadProducts = () => ({
  type: LOAD_PRODUCTS,
  products: {
    alcohol: [{
      id: 'a01',
      name: 'Vodka pure 1L',
      image: 'img',
      description: 'Un grand bol de vodka pure',
      price: 15.5,
    }],
    soft: [{
      id: 's01',
      name: 'Ice tea 33cl',
      image: 'img',
      description: 'Lipton Ice tea en canette 33cl',
      price: 2,
    },
    {
      id: 's02',
      name: 'Cocal-cola 33cl',
      image: 'img',
      description: 'Coca-cola en canette 33cl',
      price: 2,
    },
    {
      id: 's03',
      name: 'Oasis tropical 33cl',
      image: 'img',
      description: 'Oasis goût tropical en canette 33cl',
      price: 2,
    },
    {
      id: 's04',
      name: 'Cristalline eau plate 50cl',
      image: 'img',
      description: 'Bouteille d\'eau plate cristalline 50cl',
      price: 1.5,
    },
    {
      id: 's05',
      name: 'Dr.Pepper 33cl',
      image: 'img',
      description: 'Dr.Pepper en canette 33cl',
      price: 2.5,
    }],
    hot: [{
      id: 'h01',
      name: 'Cappuccino',
      image: 'img',
      description: 'Cappuccino 20cl',
      price: 1,
    }],
    meal: [{
      id: 'm01',
      name: 'Panini montagnard',
      image: 'img',
      description: 'Panini raclette lardon pomme de terre',
      price: 5.5,
    }],
    snack: [{
      id: 'sn01',
      name: 'Planche de charcuterie 100g',
      image: 'img',
      description: 'Assortiment de saucisson et autres trucs gras de 100g',
      price: 5,
    }],
  }
})

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