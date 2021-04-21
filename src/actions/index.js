const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const createBook = book => ({
  type: CREATE_BOOK,
  book,
});

const removeBook = id => ({
  type: REMOVE_BOOK,
  id,
});

const changeFilter = id => ({
  type: CHANGE_FILTER,
  id,
});

export { createBook, removeBook, changeFilter };