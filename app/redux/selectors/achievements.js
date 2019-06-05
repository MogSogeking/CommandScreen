import { get } from 'immutadot'

export const getAchievements = state => get(state, 'achievements.achievements', {})

export const getSelectedAchievement = state => get(state, 'achievements.selectedAchievement', {})

export const getAchievementsCount = state => {
  const achievements = get(state, 'achievements.achievements', {})
  let totalAchievements = 0
  Object.keys(achievements).forEach(category => {
    totalAchievements += category.length
  })

  return totalAchievements
}