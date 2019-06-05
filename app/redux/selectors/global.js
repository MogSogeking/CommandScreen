import { get } from 'immutadot'

export const isValidProfile = state => !!get(state, 'global.profile.cardUid')

export const getProfile = state => get(state, 'global.profile', {})

export const getProfiles = state => {
  console.log("we here")
  return get(state, 'global.profiles', [])
}