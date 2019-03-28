export const LOAD_PRODUCTS = 'LOAD_PRODUCTS'

export const loadProducts = () => ({
  type: LOAD_PRODUCTS,
  products: {
    alcohol: [{
      id: '01',
      name: 'Vodka pure 1L',
      image: 'img',
      description: 'Un grand bol de vodka pure',
    }],
    soft: [{
      id: '01',
      name: 'Ice tea 33cl',
      image: 'img',
      description: 'Lipton Ice tea en canette 33cl',
    },
    {
      id: '02',
      name: 'Cocal-cola 33cl',
      image: 'img',
      description: 'Coca-cola en canette 33cl',
    },
    {
      id: '03',
      name: 'Oasis tropical 33cl',
      image: 'img',
      description: 'Oasis goût tropical en canette 33cl',
    },
    {
      id: '04',
      name: 'Cristalline eau plate 50cl',
      image: 'img',
      description: 'Bouteille d\'eau plate cristalline 50cl',
    },
    {
      id: '05',
      name: 'Dr.Pepper 33cl',
      image: 'img',
      description: 'Dr.Pepper en canette 33cl',
    }],
    hot: [{
      id: '01',
      name: 'Cappuccino',
      image: 'img',
      description: 'Cappuccino 20cl'
    }],
    meal: [{
      id: '01',
      name: 'Panini montagnard',
      image: 'img',
      description: 'Panini raclette lardon pomme de terre',
    }],
    snack: [{
      id: '01',
      name: 'Planche de charcuterie 100g',
      image: 'img',
      description: 'Assortiment de saucisson et autres trucs gras de 100g',
    }],
  }
})

export const SELECT_PRODUCT = 'SELECT_PRODUCT'

export const selectProduct = product => ({
  type: SELECT_PRODUCT,
  product,
})