import { connect } from 'react-redux';
import CommandPage from './CommandPage';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(
  mapStateToProps,
  undefined
)(CommandPage);
