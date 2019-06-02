import { connect } from 'react-redux'
import AchievementDetails from './AchievementDetails'
import { getSelectedAchievement } from '../../redux/selectors/achievements'

const mapStateToProps = state => ({
  achievement: getSelectedAchievement(state)
})

export default connect(
  mapStateToProps,
  undefined,
)(AchievementDetails)