import { connect } from 'react-redux';
import AchievementsPage from './AchievementsPage';
import { purgeAchievement } from '../../../redux/actions/achievements';

const mapDispatchToProps = dispatch => ({
  purgeAchievement : () => dispatch(purgeAchievement())
})

export default connect(
  undefined,
  mapDispatchToProps,
)(AchievementsPage);
