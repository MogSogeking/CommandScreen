import { connect } from 'react-redux';
import ExtrasPage from './ExtrasPage';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(
  mapStateToProps,
  undefined
)(ExtrasPage);
