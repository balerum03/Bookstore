import React from 'react';
import { connect } from 'react-redux';
import Book from '../components/Book';

const mapStateToProps = state => {
  const { books } = state;
  return { books };
};

const BookList = ({books}) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {books.map(book => <Book key={book.id} book={book}/>)}
    </tbody>
  </table>
);

BookList.propTypes = {
  books: PropTypes.objectOf(PropTypes.object).isRequired,
};

const BooksList = connect(
  mapStateToProps,
  null,
)(BookList);

export default BooksList;
