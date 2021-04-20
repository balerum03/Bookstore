import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {createBook} from '../actions/index';

const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

const BookForm = () => {
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
      id: parseInt(Date.now()),
      title,
      category,
    }));
    setTitle('');
    setCategory('');
  };

  return(
    <form onSubmit={submitHandler}> 
      <input type="text" onChange={titleHandler} value={title.value} />
      <select name="categories" onChange={categoryHandler} value={category.value}>
        {categories.map(category => (
          <option key={category}>
            {' '}
            {category}
          </option>
        ))}
      </select>
      <button type="button" value="Submit">Submit</button>
    </form>
  );
};

export default BookForm;