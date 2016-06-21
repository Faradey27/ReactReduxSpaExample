import { PropTypes } from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavigationHeader from './../components/NavigationHeader';

const App = ({ children }) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div>
      <NavigationHeader />
      {children}
    </div>
  </MuiThemeProvider>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
