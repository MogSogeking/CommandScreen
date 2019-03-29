import { connect } from 'react-redux';
import CommandPage from './CommandPage';
import { loadProducts } from '../../../redux/actions/command'

export default connect(
  undefined,
  undefined,
)(CommandPage);
