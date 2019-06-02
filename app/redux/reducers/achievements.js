import {
  set,
  get,
} from 'immutadot'

import { makeReducer } from '../../utils/utils'

import {
  LOAD_ACHIEVEMENTS,
  SELECT_ACHIEVEMENT,
  PURGE_ACHIEVEMENT,
} from '../actions/achievements'


const initState = {
  achievements: {},
  selectedAchievement: {},
}

const actions = {
  [LOAD_ACHIEVEMENTS]: (state, { achievements }) => set(state, 'achievements', achievements),
  [SELECT_ACHIEVEMENT]: (state, { achievement }) => set(state, 'selectedAchievement', achievement),
  [PURGE_ACHIEVEMENT]: state => set(state, 'selectedAchievement', {})
}

export const achievements = makeReducer(initState, actions)
