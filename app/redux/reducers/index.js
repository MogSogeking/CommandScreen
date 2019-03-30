// @flow
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import counter from './counter';
import { command } from './command';
import { global } from './global';

export default function createRootReducer(history: History) {
  return combineReducers({
    router: connectRouter(history),
    counter,
    command,
    global,
  });
}
