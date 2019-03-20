import { connect } from 'react-redux';
import Extras from '../components/Extras/Extras';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(
  mapStateToProps,
  undefined
)(Extras);
