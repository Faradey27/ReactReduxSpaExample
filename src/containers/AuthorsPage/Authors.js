import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';

import { getAuthorsSelector } from './../../selectors/authors';
import { loadAuthors } from './../../actions/authors';

class Authors extends Component {
  static propTypes = {
    authors: PropTypes.instanceOf(Immutable.List),
    loadAuthors: PropTypes.func.isRequired,
  }

  componentWillMount() {
    this.props.loadAuthors();
  }

  render() {
    return (
      <div>
        {'Authors'}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  authors: getAuthorsSelector(state),
});

export default connect(mapStateToProps, {
  loadAuthors,
})(Authors);
