const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const createBook = book => ({
  type: CREATE_BOOK,
  book,
});

const removeBook = id => ({
  type: REMOVE_BOOK,
  id,
});

export { createBook, removeBook };