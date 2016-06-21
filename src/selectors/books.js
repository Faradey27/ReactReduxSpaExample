import { createSelector } from 'reselect';

import { NOT_FOUND } from './../constants/Constants';

const getBooksList = (state, props) => state.getIn(['entities', 'book']).
  filter((book) => !props.routeParams.genre || book.get('genre').indexOf(props.routeParams.genre) !== NOT_FOUND);

export const getBooksSelector = createSelector(
  [getBooksList],
  (books) => books.toList()
);

const getBook = (state, props) => state.getIn(['entities', 'book', props.routeParams.name]);

export const getBookSelector = createSelector(
  [getBook],
  (book) => book
);
