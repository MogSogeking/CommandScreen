import { connect } from 'react-redux'
import AchievementItem from './AchievementItem'
import { selectAchievement } from '../../redux/actions/achievements'
import { getSelectedAchievement } from '../../redux/selectors/achievements'

const mapStateToProps = state => ({
  selectedAchievement: getSelectedAchievement(state),
})

const mapDispatchToProps = (dispatch, { achievement }) => ({
  selectAchievement: () => dispatch(selectAchievement(achievement)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AchievementItem)