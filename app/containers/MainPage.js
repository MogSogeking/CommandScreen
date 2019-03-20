import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainMenu from '../components/MainMenu/MainMenu';
import * as CounterActions from '../actions/counter';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu);
