import { connect } from 'react-redux'
import LogoutButton from './LogoutButton'
import { purgeProfile } from '../../redux/actions/global'

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(purgeProfile())
})

export default connect(
  undefined,
  mapDispatchToProps,
)(LogoutButton)