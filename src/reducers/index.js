import { combineReducers } from 'redux-immutablejs';
import Immutable from 'immutable';

import routing from './routing';
import authorsView from './authorsView';
import booksView from './booksView';

const entities = (state = Immutable.fromJS({ author: {}, book: {} }), action) => {
  if (action.payload && action.payload.entities) {
    return state.mergeDeep(Immutable.fromJS(action.payload.entities));
  }

  return state;
};

export default combineReducers({
  entities,
  authorsView,
  booksView,
  routing,
});
