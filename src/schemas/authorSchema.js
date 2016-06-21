import { Schema, arrayOf } from 'normalizr';
import bookSchema from './bookSchema';

const author = new Schema('author', {
  idAttribute: 'name',
});

author.define({
  books: arrayOf(bookSchema),
});

export default author;
