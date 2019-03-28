import { connect } from 'react-redux';
import CommandPage from './CommandPage';
import { loadProducts } from '../../../actions/command'

const mapDispatchToProps = dispatch => ({
  load: () => {}
})


export default connect(
  undefined,
  mapDispatchToProps
)(CommandPage);
