import { backendApiUrl } from '../../utils/utils'

export const CHECK_PROFILE = 'CHECK_PROFILE'

export const checkProfile = cardUid => dispatch => {

  fetch(`${backendApiUrl}/profile/${cardUid}`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: CHECK_PROFILE,
        profile: data[0],
      })
    })
}

export const PURGE_PROFILE = 'PURGE_PROFILE'

export const purgeProfile = () => ({ type: PURGE_PROFILE })

export const LOAD_PROFILES = 'LOAD_PROFILES'

export const loadProfiles = () => dispatch => {
  console.log("we there")
  fetch(`${backendApiUrl}/profiles`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: LOAD_PROFILES,
        profiles: data,
      })
    })
}