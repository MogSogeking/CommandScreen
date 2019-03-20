import { connect } from 'react-redux';
import PlayPage from '../components/Pages/PlayPage/PlayPage';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

export default connect(
  mapStateToProps,
  undefined
)(PlayPage);
