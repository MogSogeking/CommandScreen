import { connect } from 'react-redux'
import LogoutButton from './LogoutButton'
import { purgeProfile } from '../../redux/actions/global'
import { purgeCart } from '../../redux/actions/command';
import { purgeAchievement } from '../../redux/actions/achievements';

const mapDispatchToProps = dispatch => ({
  logout: () => {
    dispatch(purgeProfile())
    dispatch(purgeCart())
    dispatch(purgeAchievement())
  }
})

export default connect(
  undefined,
  mapDispatchToProps,
)(LogoutButton)