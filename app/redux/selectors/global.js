import { get } from 'immutadot'

export const isValidProfile = state => !!get(state, 'global.profile.cardUid')
