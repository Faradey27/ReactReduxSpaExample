import { Schema } from 'normalizr';
import authorSchema from './authorSchema';

const book = new Schema('book', {
  idAttribute: 'name',
});

book.define({
  authors: authorSchema,
});

export default book;
