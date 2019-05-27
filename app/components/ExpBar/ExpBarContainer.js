import { connect } from 'react-redux';
import ExpBar from './ExpBar';
import { getProfile } from '../../redux/selectors/global'

const mapStateToProps = state => ({
  profile: getProfile(state),
})

export default connect(
  mapStateToProps,
)(ExpBar);
