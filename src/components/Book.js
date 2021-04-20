import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
	const {book, remove} = props;
	return (
		<tr key={book.id}>
			<td>{book.id}</td>
			<td>{book.title}</td>
			<td>{book.category}</td>
			<button type='button' value={book.id} onClick={remove}>Remove</button>
		</tr>
	)
};

Book.propTypes = {
	book: PropTypes.exact({
		id: PropTypes.number.isRequired,
		title: PropTypes.string.isRequired,
		category: PropTypes.string.isRequired,
	}),
	remove: PropTypes.func.isRequired,
}

Book.defaultProps = {
	book: '',
}

export default Book;