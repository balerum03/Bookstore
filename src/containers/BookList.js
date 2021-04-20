import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import {removeBook} from '../actions/index';

const BookList = () => {
  const books = useSelector(state => state.books);
  const dispatch = useDispatch();

  const removeHandler = e => {
    const id = parseFloat(e.target.value);
    dispatch(removeBook(id));
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => <Book key={book.id} book={book} remove={removeHandler}/>)}
      </tbody>
    </table>
  )
};

export default BookList;
