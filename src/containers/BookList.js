import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Book from '../components/Book';
import { changeFilter,removeBook } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';
import PropTypes from 'prop-types';

const BookList = ({ categories }) => {
  const books = useSelector(state => state.books);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const removeHandler = e => {
    const id = parseFloat(e.target.value);
    dispatch(removeBook(id));
  }

  const handleFilterChange = e => {
    dispatch(changeFilter(e.target.value))
  }

  const bookFilter = () => {
    if(filter !== 'All'){
      return books.filter(book => book.category === filter);
    } else {
      return books;
    }
  }

  return (
    <div>
      <CategoryFilter categories={categories} handleFilterChange={handleFilterChange}/>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {bookFilter().map(book => <Book key={book.id} book={book} remove={removeHandler}/>)}
        </tbody>
      </table>
    </div>
  )
};

BookList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

BookList.defaultProps = {
  categories: [],
};

export default BookList;
