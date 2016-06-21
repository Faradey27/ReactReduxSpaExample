import { createReducer } from 'redux-immutablejs';
import Immutable from 'immutable';

import * as ActionTypes from './../actions/authors';

const initialState = Immutable.fromJS({
  isFetching: false,
  error: null,
  list: {},
});

export default createReducer(initialState, {
  [ActionTypes.LOAD_AUTHORS_START]: (state) => state.merge({
    isFetching: true,
    error: null,
  }),
  [ActionTypes.LOAD_AUTHORS_SUCCESS]: (state) => state.merge({
    isFetching: false,
    error: null,
  }),
  [ActionTypes.LOAD_AUTHORS_FAILURE]: (state) => state.merge({
    isFetching: false,
    error: true,
  }),
  [ActionTypes.LOAD_AUTHOR_START]: (state, action) => state.setIn(['list', action.meta.name], {
    isFetching: true,
    error: null,
  }),
  [ActionTypes.LOAD_AUTHOR_SUCCESS]: (state, action) => state.setIn(['list', action.meta.name], {
    isFetching: false,
    error: null,
  }),
  [ActionTypes.LOAD_AUTHOR_FAILURE]: (state, action) => state.setIn(['list', action.meta.name], {
    isFetching: true,
    error: true,
  }),
});
