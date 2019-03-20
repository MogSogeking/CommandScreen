import { connect } from 'react-redux';
import CommandPage from '../components/Pages/CommandPage/CommandPage';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(
  mapStateToProps,
  undefined
)(CommandPage);
