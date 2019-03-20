import { connect } from 'react-redux';
import ExtrasPage from '../components/Pages/ExtrasPage/ExtrasPage';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(
  mapStateToProps,
  undefined
)(ExtrasPage);
