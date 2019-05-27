export const makeReducer = (initState, actions) => (state = initState, action) => actions[action.type] ? actions[action.type](state, action) : state

export const backendApiUrl = 'http://localhost:8080/api'

export const computeRequiredExp = level => {
  return Math.round(500+500*Math.pow(level, 0.5))
}