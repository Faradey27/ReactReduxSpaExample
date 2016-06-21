import AppBar from 'material-ui/AppBar';

import HeaderTabs from './HeaderTabs';

const styles = {
  bar: {
    margin: 0,
  },
  title: {},
};

const NavigationHeader = () => (
  <div>
    <AppBar
      style={styles.bar}
      title={<HeaderTabs />}
    />
  </div>
);

export default NavigationHeader;
