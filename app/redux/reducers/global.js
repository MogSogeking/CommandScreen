import {
  set,
} from 'immutadot'

import { makeReducer } from '../../utils/utils'

import {
  CHECK_PROFILE,
  PURGE_PROFILE,
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
    console.log(profile)
    return set(state, 'profile', profile)
  },
}

export const global = makeReducer(initState, actions)
