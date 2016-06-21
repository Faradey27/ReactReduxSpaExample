import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';

import { getAuthorSelector } from './../../selectors/authors';
import { loadAuthorDetails } from './../../actions/authors';

class AuthorDetails extends Component {
  static propTypes = {
    author: PropTypes.instanceOf(Immutable.Map),
    loadAuthorDetails: PropTypes.func.isRequired,
    routeParams: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.loadAuthorDetails(this.props.routeParams.name);
  }

  render() {
    return (
      <div>
        {'AuthorDetails'}
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  author: getAuthorSelector(state, props),
});

export default connect(mapStateToProps, {
  loadAuthorDetails,
})(AuthorDetails);
