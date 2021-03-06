import { connect } from 'react-redux'
import CommandSummary from './CommandSummary'
import { getCart, getCartTotalPrice } from '../../redux/selectors/command'
import { removeFromCart } from '../../redux/actions/command'

const mapStateToProps = state => ({
  cart: getCart(state),
  totalPrice: getCartTotalPrice(state)
})

const mapDispatchToProps = dispatch => ({
  removeFromCart: product => dispatch(removeFromCart(product)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommandSummary)