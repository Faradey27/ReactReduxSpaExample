import { expect } from 'chai';
import { CALL_API } from 'redux-api-middleware';
import { arrayOf } from 'normalizr';

import * as Actions from './../../../src/actions/authors';
import { API_URL } from './../../../src/constants/Api';
import schemaUtils from './../../../src/utils/schemaUtils';
import authorSchema from './../../../src/schemas/authorSchema';

describe('authors actions', () => {
  describe('test constants', () => {
    it('verify existence of LOAD_AUTHORS', () => {
      expect(Actions.LOAD_AUTHORS_START).to.not.be.undefined;
      expect(Actions.LOAD_AUTHORS_SUCCESS).to.not.be.undefined;
      expect(Actions.LOAD_AUTHORS_FAILURE).to.not.be.undefined;
    });
  });

  describe('test action creators', () => {
    it('test result of calling of function loadAuthors', () => {
      const expectedResult = {
        [CALL_API]: {
          types: [
            Actions.LOAD_AUTHORS_START,
            schemaUtils.getSuccessActionTypeWithSchema({ type: Actions.LOAD_AUTHORS_SUCCESS, schema: arrayOf(authorSchema) }),
            Actions.LOAD_AUTHORS_FAILURE,
          ],
          method: 'GET',
          endpoint: `${API_URL}/authors`,
        },
      };
      const res = JSON.parse(JSON.stringify(Actions.loadAuthors()((obj) => obj)[CALL_API]));
      const exp = JSON.parse(JSON.stringify(expectedResult[CALL_API]));
      expect(res).to.eql(exp);
    });
  });
});
