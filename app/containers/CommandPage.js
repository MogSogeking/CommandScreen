import { connect } from 'react-redux';
import Command from '../components/Command/Command';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(
  mapStateToProps,
  undefined
)(Command);
