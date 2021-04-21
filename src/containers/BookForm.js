import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {createBook} from '../actions/index';
import PropTypes from 'prop-types';

const BookForm = ({ categories }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const titleHandler = e => {
    setTitle(e.target.value);
  };

  const categoryHandler = e => {
    setCategory(e.target.value);
  };

  const submitHandler = e => {
    e.preventDefault();
    dispatch(createBook({
      id: Math.floor(Math.random() * 100),
      title,
      category,
    }));
    setTitle({value:''});
    setCategory({value:''});
  };

  return(
    <div className="book-form">
      <h3 className="title">ADD NEW BOOK</h3>
      <form onSubmit={submitHandler}>
        <input type="text" required onChange={titleHandler} value={title.value} />
        <select required onChange={categoryHandler} value={category.value}>
          <option value="">Category</option>
          {categories.map(category => (
            <option key={category}>
              {' '}
              {category}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

BookForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

BookForm.defaultProps = {
  categories: [],
};

export default BookForm;