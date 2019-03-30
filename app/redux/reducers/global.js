import { makeReducer } from '../../utils/utils'

import {
  set,
} from 'immutadot'

import {
  CHECK_PROFILE, PURGE_PROFILE
} from '../actions/global'


const initState = {
  profile: {},
}

const actions = {
  [CHECK_PROFILE]: (state, { profile }) => {
    if(!profile) {
      return state
    } else {
      return set(state, 'profile', profile)
    }
  },
  [PURGE_PROFILE]: state => set(state, 'profile', {})
}

export const global = makeReducer(initState, actions)