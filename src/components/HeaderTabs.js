import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

const styles = {
  base: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  label: {
    color: '#fff',
  },
};

const HeaderTabs = () => (
  <div style={styles.base}>
    <FlatButton
      containerElement={<Link to="/books" />}
      label="Books"
      labelStyle={styles.label}
    />
    <FlatButton
      containerElement={<Link to="/authors" />}
      label="Authors"
      labelStyle={styles.label}
    />
  </div>
);

export default HeaderTabs;
