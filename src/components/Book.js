import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
	const {book, remove} = props;
	return (
		<tbody>
			<tr key={book.id}>
				<div className="book">
					<div className="book-info">
						<td className="book-title">{book.title}</td>
						<td className="book-category">{book.category}</td>
					</div>
					<button type='button' onClick={remove} value={book.id} className="btn">Remove</button>
				</div>
			</tr>
		</tbody>
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