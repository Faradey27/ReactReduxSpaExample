import { CALL_API } from 'redux-api-middleware';
import { arrayOf } from 'normalizr';

import { API_URL } from './../constants/Api';

import schemaUtils from './../utils/schemaUtils';
import authorSchema from './../schemas/authorSchema';

export const LOAD_AUTHORS_START = 'LOAD_AUTHORS_START';
export const LOAD_AUTHORS_SUCCESS = 'LOAD_AUTHORS_SUCCESS';
export const LOAD_AUTHORS_FAILURE = 'LOAD_AUTHORS_FAILURE';

const fetchAuthors = () => ({
  [CALL_API]: {
    types: [
      LOAD_AUTHORS_START,
      schemaUtils.getSuccessActionTypeWithSchema({ type: LOAD_AUTHORS_SUCCESS, schema: arrayOf(authorSchema) }),
      LOAD_AUTHORS_FAILURE,
    ],
    method: 'GET',
    endpoint: `${API_URL}/authors`,
  },
});

export const loadAuthors = () => (dispatch) => dispatch(fetchAuthors());

export const LOAD_AUTHOR_START = 'LOAD_AUTHOR_START';
export const LOAD_AUTHOR_SUCCESS = 'LOAD_AUTHOR_SUCCESS';
export const LOAD_AUTHOR_FAILURE = 'LOAD_AUTHOR_FAILURE';

const fetchAuthor = (name) => ({
  [CALL_API]: {
    types: [
      { type: LOAD_AUTHOR_START, meta: { name } },
      schemaUtils.getSuccessActionTypeWithSchema({ type: LOAD_AUTHOR_SUCCESS, schema: authorSchema, meta: { name } }),
      { type: LOAD_AUTHOR_FAILURE, meta: { name } },
    ],
    method: 'GET',
    endpoint: `${API_URL}/author/${name}`,
  },
});

export const loadAuthorDetails = (name) => (dispatch) => dispatch(fetchAuthor(name));
