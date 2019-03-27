import { connect } from 'react-redux';
import CommandTabs from './CommandTabs';
import getProducts from '../../selectors/command'

function mapStateToProps(state) {
  return {
    products: getProducts(state),
  };
}

export default connect(
  mapStateToProps,
  undefined
)(CommandTabs);
