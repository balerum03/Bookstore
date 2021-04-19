import React from 'react';
import Book from '../components/Book';

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

export default BookList;
