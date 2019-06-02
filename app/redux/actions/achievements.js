import { backendApiUrl } from '../../utils/utils'

export const LOAD_ACHIEVEMENTS = 'LOAD_ACHIEVEMENTS'

export const loadAchievements = () => dispatch => {

  fetch(`${backendApiUrl}/achievements`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: LOAD_ACHIEVEMENTS,
        achievements: data,
      })
    })
}

export const SELECT_ACHIEVEMENT = 'SELECT_ACHIEVEMENT'

export const selectAchievement = achievement => ({
  type: SELECT_ACHIEVEMENT,
  achievement,
})

export const PURGE_ACHIEVEMENT = 'PURGE_ACHIEVEMENT'

export const purgeAchievement = () => ({ type: PURGE_ACHIEVEMENT })