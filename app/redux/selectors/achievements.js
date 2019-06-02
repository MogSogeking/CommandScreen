import { get } from 'immutadot'

export const getAchievements = state => get(state, 'achievements.achievements', {})

export const getSelectedAchievement = state => get(state, 'achievements.selectedAchievement', {})