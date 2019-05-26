import { connect } from 'react-redux';
import CommandValidation from './CommandValidation';
import { getCart, getCartTotalPrice } from '../../redux/selectors/command'
import { getProfile } from '../../redux/selectors/global'
import { validCommand } from '../../redux/actions/command'

const mapStateToProps = state => ({
  cart: getCart(state),
  totalCartPrice: getCartTotalPrice(state),
  profile: getProfile(state),
})

const mapDispatchToProps = dispatch => ({
  valid: (totalCartPrice, cart, profile) => dispatch(validCommand(totalCartPrice, cart, profile)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommandValidation);
