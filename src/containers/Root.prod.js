import { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import routes from '../routes';

const Root = ({ store, history }) => (
  <Provider store={store}>
    <div>
      <Router
        history={history}
        routes={routes}
      />
    </div>
  </Provider>
);

Root.propTypes = {
  history: PropTypes.object,
  store: PropTypes.object.isRequired,
};

export default Root;
