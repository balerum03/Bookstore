import React from 'react';
import PropTypes from 'prop-types';
import { Fragment } from 'react';

const Book = props => {
	const {book, remove} = props;
	return (
		<Fragment>
			<tr key={book.id}>
				<td>{book.id}</td>
				<td>{book.title}</td>
				<td>{book.category}</td>
			</tr>
			<button type='button' onClick={remove} value={book.id}>Remove</button>
		</Fragment>
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