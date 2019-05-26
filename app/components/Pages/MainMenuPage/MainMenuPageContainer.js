import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MainMenuPage from './MainMenuPage';
import { getProfile } from '../../../redux/selectors/global'

const mapStateToProps = state => ({
  profile: getProfile(state),
})

export default connect(
  mapStateToProps,
)(MainMenuPage);
