import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import radium from 'radium';
import { Link } from 'react-router';
import pureRender from 'pure-render-decorator';

import { getBookSelector } from './../../selectors/books';
import { loadBookDetails } from './../../actions/books';
import { ONE } from './../../constants/Constants';

const styles = {
  base: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: 20,
  },
  info: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: 15,
    width: '100%',
  },
  field: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
  },
  img: {
    width: 200,
    height: 280,
  },
  linkStyle: {
    textDecoration: 'none',
    color: '#000',
  },
  linkText: {
    ':hover': {
      color: 'gold',
    },
  },
};

@radium
@pureRender
class BookDetails extends Component {
  static propTypes = {
    book: PropTypes.instanceOf(Immutable.Map),
    loadBookDetails: PropTypes.func.isRequired,
    routeParams: PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.loadBookDetails(this.props.routeParams.name);
  }

  renderGenres(book) {
    return book.get('genre') && book.get('genre').map((genre, index) =>
      <Link
        key={genre}
        style={styles.linkStyle}
        to={`/books/${genre}`}
      >
        <span
          key={genre}
          style={[styles.linkText]}
        >
          {genre}
        </span>
        {book.get('genre').size > ONE && book.get('genre').size !== index + ONE ? ',' : ''} &nbsp;
      </Link>
    );
  }

  render() {
    const { book = new Immutable.Map() } = this.props;
    const authors = book.get('authors') && book.get('authors').size > ONE
      ? book.get('authors').concat(',')
      : book.get('authors') && book.get('authors').concat();

    return (
      <div style={[styles.base]}>
        <img
          alt={book.get('name')}
          src={book.get('img')}
          style={styles.img}
        />
        <div style={[styles.info]}>
          <div style={[styles.field]}>
            <span htmlFor="">{'Name:'} </span>
            <span>{book.get('name')}</span>
          </div>
          <div style={[styles.field]}>
            <span htmlFor="">{'Authors:'} </span>
            <span>{authors}</span>
          </div>
          <div style={[styles.field]}>
            <span htmlFor="">{'Genres:'} </span>
            <span>{this.renderGenres(book)}</span>
          </div>
          <div style={[styles.field]}>
            <span htmlFor="">{'Description:'} </span>
            <span>{book.get('description') && book.get('description').concat()}</span>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  book: getBookSelector(state, props),
});

export default connect(mapStateToProps, {
  loadBookDetails,
})(BookDetails);
