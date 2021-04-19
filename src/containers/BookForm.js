import React from 'react';

const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

const BookForm = () => {
  const clickHandler = () => {};
  return(
    <form>
      <input type="text" />
      <select name="categories">
        {categories.map(category => (
          <option key={category}>
            {' '}
            {category}
          </option>
        ))}
      </select>
      <button type="button" value="Submit" onClick={clickHandler}>Submit</button>
    </form>
  );
};

export default BookForm;