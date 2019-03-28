import { connect } from 'react-redux'
import CommandSummary from './CommandSummary'
import getSelectedProduct from '../../selectors/command'

const mapStateToProps = state => ({
  product: getSelectedProduct(state)
})