import {
  set,
} from 'immutadot'

import { makeReducer } from '../../utils/utils'

import {
  CHECK_PROFILE,
  PURGE_PROFILE,
  LOAD_PROFILES,
} from '../actions/global'

import {
  UPDATE_PROFILE,
} from '../actions/command'


const initState = {
  profile: {},
}

const actions = {
  [CHECK_PROFILE]: (state, { profile }) => {
    if(!profile) {
      return state
    }
    return set(state, 'profile', profile)
  },
  [PURGE_PROFILE]: state => set(state, 'profile', {}),
  [UPDATE_PROFILE]: (state, { profile }) => {
    return set(state, 'profile', profile)
  },
  [LOAD_PROFILES]: (state, { profiles }) => set(state, 'profiles', profiles)
}

export const global = makeReducer(initState, actions)
