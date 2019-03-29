import { connect } from 'react-redux';
import { compose } from 'redux'
import loader from '@hoc-react-loader/core'
import CommandTabs from './CommandTabs';
import { getProducts } from '../../redux/selectors/command'
import { loadProducts } from '../../redux/actions/command'

const mapStateToProps = state => ({
  products: getProducts(state),
})

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(loadProducts()),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  loader(),
)(CommandTabs);
