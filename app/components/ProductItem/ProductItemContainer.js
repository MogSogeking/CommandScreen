import { connect } from 'react-redux'
import ProductItem from './ProductItem'

import { selectProduct } from '../../actions/command'

const mapDispatchToProps = (dispatch, { product }) => ({
  selectProduct: () => dispatch(selectProduct(product))
})

export default connect(
  undefined,
  mapDispatchToProps,
)(ProductItem)