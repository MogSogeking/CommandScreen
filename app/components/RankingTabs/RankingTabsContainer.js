import { connect } from 'react-redux';
import { compose } from 'redux'
import loader from '@hoc-react-loader/core'
import RankingTabs from './RankingTabs';
import { loadProfiles } from '../../redux/actions/global'
import { getProfile, getProfiles } from '../../redux/selectors/global';

const mapStateToProps = state => ({
  profiles: getProfiles(state),
  profile: getProfile(state)
})

const mapDispatchToProps = dispatch => ({
  load: () => dispatch(loadProfiles()),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  loader(),
)(RankingTabs);
