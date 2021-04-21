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
    setTitle('');
    setCategory('');
  };

  return(
    <form onSubmit={submitHandler}> 
      <input type="text" onChange={titleHandler} value={title.value} />
      <select onChange={categoryHandler} value={category.value}>
        {categories.map(category => (
          <option key={category}>
            {' '}
            {category}
          </option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
};

BookForm.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string),
};

BookForm.defaultProps = {
  categories: [],
};

export default BookForm;