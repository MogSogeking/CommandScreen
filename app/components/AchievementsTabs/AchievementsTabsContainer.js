import { connect } from 'react-redux';
import { compose } from 'redux'
import loader from '@hoc-react-loader/core'
import AchievementsTabs from './AchievementsTabs';
import { getAchievements } from '../../redux/selectors/achievements'
import { loadAchievements } from '../../redux/actions/achievements'
import { getProfile } from '../../redux/selectors/global';

const mapStateToProps = state => ({
  achievements: getAchievements(state),
  profile: getProfile(state)
})

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(loadAchievements()),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  loader(),
)(AchievementsTabs);
