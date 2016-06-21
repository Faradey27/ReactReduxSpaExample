import { CALL_API } from 'redux-api-middleware';
import { arrayOf } from 'normalizr';

import { API_URL } from './../constants/Api';

import schemaUtils from './../utils/schemaUtils';
import bookSchema from './../schemas/bookSchema';

export const LOAD_BOOKS_START = 'LOAD_BOOKS_START';
export const LOAD_BOOKS_SUCCESS = 'LOAD_BOOKS_SUCCESS';
export const LOAD_BOOKS_FAILURE = 'LOAD_BOOKS_FAILURE';

const fetchBooks = (genre) => ({
  [CALL_API]: {
    types: [
      LOAD_BOOKS_START,
      schemaUtils.getSuccessActionTypeWithSchema({ type: LOAD_BOOKS_SUCCESS, schema: arrayOf(bookSchema) }),
      LOAD_BOOKS_FAILURE,
    ],
    method: 'GET',
    endpoint: genre ? `${API_URL}/books/${genre}` : `${API_URL}/books`,
  },
});

export const loadBooks = (genre) => (dispatch) => dispatch(fetchBooks(genre));

export const LOAD_BOOK_START = 'LOAD_BOOK_START';
export const LOAD_BOOK_SUCCESS = 'LOAD_BOOK_SUCCESS';
export const LOAD_BOOK_FAILURE = 'LOAD_BOOK_FAILURE';

const fetchBook = (name) => ({
  [CALL_API]: {
    types: [
      { type: LOAD_BOOK_START, meta: { name } },
      schemaUtils.getSuccessActionTypeWithSchema({ type: LOAD_BOOK_SUCCESS, schema: bookSchema, meta: { name } }),
      { type: LOAD_BOOK_FAILURE, meta: { name } },
    ],
    method: 'GET',
    endpoint: `${API_URL}/book/${name}`,
  },
});

export const loadBookDetails = (name) => (dispatch) => dispatch(fetchBook(name));
