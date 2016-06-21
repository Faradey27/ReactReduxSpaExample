import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import radium from 'radium';
import CircularProgress from 'material-ui/CircularProgress';
import pureRender from 'pure-render-decorator';

import BookCard from './components/BookCard';

import { getBooksSelector } from './../../selectors/books';
import { loadBooks } from '../../actions/books';

const styles = {
  cards: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  spinnerContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 20,
  },
};

@radium
@pureRender
class Books extends Component {
  static propTypes = {
    books: PropTypes.instanceOf(Immutable.List),
    isFetching: PropTypes.bool,
    loadBooks: PropTypes.func.isRequired,
    routeParams: PropTypes.object.isRequired,
  }

  static contextTypes = {
    router: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.loadBooks(this.props.routeParams.genre);
  }

  renderBooks() {
    return this.props.books.map((book) => (
      <BookCard
        data={book}
        key={book.get('name')}
        push={this.context.router.push}
      />
    ));
  }

  render() {
    const spinner = this.props.isFetching
      ? <CircularProgress />
      : null;

    return (
      <div style={[styles.cards]}>
        {this.renderBooks()}
        <div style={[styles.spinnerContainer]}>
          {spinner}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  books: getBooksSelector(state, props),
  isFetching: state.getIn(['booksView', 'isFetching']),
});

export default connect(mapStateToProps, {
  loadBooks,
})(Books);
