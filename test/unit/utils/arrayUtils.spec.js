import Immutable from 'immutable';

import { formatArrayToOrderString } from './../../../src/utils/arrayUtils';

describe('arrayUtils-spec', () => {
  describe('formatArrayToOrderString', () => {
    it('should format array with ,', () => {
      const arr = Immutable.fromJS(['1', '2']);
      expect(formatArrayToOrderString(arr)).to.be.eql(new Immutable.List(["1", "2", ","]));
    });
    it('should format array without ,', () => {
      const arr = Immutable.fromJS(['1']);
      expect(formatArrayToOrderString(arr)).to.be.eql(new Immutable.List(['1']));
    });
    it('should return empty string', () => {
      const arr = Immutable.fromJS([]);
      expect(formatArrayToOrderString(arr)).to.be.eql(new Immutable.List());
    });
  });
});
