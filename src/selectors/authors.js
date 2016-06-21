import { createSelector } from 'reselect';

const getAuthorsList = (state) => state.getIn(['entities', 'author']);

export const getAuthorsSelector = createSelector(
  [getAuthorsList],
  (authors) => authors.toList()
);

const getAuthor = (state, props) => state.getIn(['entities', 'author', props.routeParams.name]);

export const getAuthorSelector = createSelector(
  [getAuthor],
  (author) => author
);
