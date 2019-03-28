import { connect } from 'react-redux'
import ProductDescription from './ProductDescription'
import { getSelectedProduct } from '../../selectors/command'

const mapStateToProps = state => ({
  product: getSelectedProduct(state)
})

export default connect (
  mapStateToProps,
  undefined,
)(ProductDescription)