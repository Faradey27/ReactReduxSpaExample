import { Route, IndexRedirect } from 'react-router';

import App from './containers/App';
import Authors from './containers/AuthorsPage';
import Books from './containers/BooksPage';
import BookDetails from './containers/BookDetailsPage';
import AuthorDetails from './containers/AuthorDetailsPage';

export default (
  <Route
    component={App}
    path="/"
  >
    <IndexRedirect to="/books" />
    <Route
      component={Authors}
      path="/authors"
    />
    <Route
      component={Books}
      path="/books(/:genre)"
    />
    <Route
      component={BookDetails}
      path="/book/:name"
    />
    <Route
      component={AuthorDetails}
      path="/author/:name"
    />
  </Route>
);
