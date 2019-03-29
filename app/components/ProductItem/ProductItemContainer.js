import { connect } from 'react-redux'
import ProductItem from './ProductItem'

import { selectProduct, addToCart } from '../../redux/actions/command'

const mapDispatchToProps = (dispatch, { product }) => ({
  selectProduct: () => dispatch(selectProduct(product)),
  addToCart: () => dispatch(addToCart(product)),
})

export default connect(
  undefined,
  mapDispatchToProps,
)(ProductItem)