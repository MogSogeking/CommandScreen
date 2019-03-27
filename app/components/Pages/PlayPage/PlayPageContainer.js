import { connect } from 'react-redux';
import PlayPage from './PlayPage';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(
  mapStateToProps,
  undefined
)(PlayPage);
