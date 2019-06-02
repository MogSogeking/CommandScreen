// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counter from './counter';
import { command } from './command';
import { global } from './global';
import { achievements } from './achievements'

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    counter,
    command,
    global,
    achievements,
  });
}
