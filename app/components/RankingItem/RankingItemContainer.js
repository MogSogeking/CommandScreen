import { connect } from 'react-redux';
import RankingItem from './RankingItem';
import { getAchievementsCount } from '../../redux/selectors/achievements';

const mapStateToProps = state => ({
  achievementsTotal: getAchievementsCount(state),
})

export default connect(
  mapStateToProps,
  undefined
)(RankingItem);
