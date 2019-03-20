import { connect } from 'react-redux';
import Play from '../components/Play/Play';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(
  mapStateToProps,
  undefined
)(Play);
