import { shallow } from 'enzyme';
import HeaderTabs from './../../../src/components/HeaderTabs';

describe('HeaderTabs-spec', () => {
  // TODO add click test, add style test
  describe('render', () => {
    it('should render HeaderTabs', () => {
      const wrapper = shallow(<HeaderTabs />);
      expect(
        wrapper.children().first().text()
      ).to.eql('<FlatButton />');
      expect(
        wrapper.children().at(1).text()
      ).to.eql('<FlatButton />');
    });
  });
});
