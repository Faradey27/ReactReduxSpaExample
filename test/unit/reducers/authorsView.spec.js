import Immutable from 'immutable';

import reducer from './../../../src/reducers/authorsView';
import * as Actions from './../../../src/actions/authors';

describe('AuthorsView-spec', () => {
  it('should start loading', () => {
    const initialState = Immutable.fromJS({
      isFetching: false,
      error: null,
      list: {},
    });
    const newState = reducer(initialState, {
      type: Actions.LOAD_AUTHORS_START,
    });
    expect(newState.getIn(['isFetching'])).to.be.true;
  });
});
