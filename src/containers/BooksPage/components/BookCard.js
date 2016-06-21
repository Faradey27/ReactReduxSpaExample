import { PropTypes, Component } from 'react';
import Immutable from 'immutable';
import radium from 'radium';
import pureRender from 'pure-render-decorator';
import { Card, CardActions, CardTitle, CardText, CardMedia } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router';

import { formatArrayToOrderString } from './../../../utils/arrayUtils';

const styles = {
  card: {
    display: 'flex',
    width: 220,
    height: 320,
  },
  activeCard: {
    ':hover': {
      boxShadow: 'rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px',
    },
  },
  cardTitleStyle: {
    lineHeight: '20px',
    overflow: 'hidden',
    marginBottom: 5,
  },
  cardMedia: {
    paddingTop: 2,
    cursor: 'pointer',
  },
  cardTitle: {
    overflow: 'hidden',
    paddingTop: 5,
    paddingBottom: 5,
  },
  cardAction: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardText: {
    height: 58,
    padding: 10,
    overflow: 'hidden',
  },
  bookName: {
    fontSize: 15,
    lineHeight: '15px',
  },
  flatButton: {
    marginRight: 0,
  },
  offset: {
    marginTop: 25,
  },
  img: {
    height: 190,
  },
};

@radium
@pureRender
class BookCard extends Component {
  static propTypes = {
    data: PropTypes.instanceOf(Immutable.Map),
    push: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  handleTouchTap() {
    this.props.push(`/book/${this.props.data.get('name')}`);
  }

  renderCardTitle(data) {
    return <span style={[styles.bookName]}>{data.get('name')}</span>;
  }

  renderCardMedia(data) {
    return (
      <CardMedia
        overlay={
          <CardTitle
            style={styles.cardTitle}
            subtitle={formatArrayToOrderString(data.get('authors'))}
            title={this.renderCardTitle(data)}
            titleStyle={styles.cardTitleStyle}
          />
        }
        style={styles.cardMedia}
      >
        <img
          alt={data.get('name')}
          src={data.get('img')}
          style={styles.img}
        />
      </CardMedia>
    );
  }

  render() {
    const { data } = this.props;

    return (
      <div
        data-qa={data.get('name')}
        style={[styles.card, styles.offset, styles.activeCard]}
        onTouchTap={this.handleTouchTap}
      >
        <Card style={styles.card}>
          {this.renderCardMedia(data)}
          <CardText style={styles.cardText}>
            {data.get('shortDescription')}
          </CardText>
          <CardActions style={styles.cardAction}>
            <FlatButton
              containerElement={<Link to={`/book/${data.get('name')}`} />}
              label="Details"
              style={styles.flatButton}
            />
            <FlatButton
              label="Download"
              style={styles.flatButton}
              onTouchTap={(event) => event.stopPropagation()}
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default BookCard;
