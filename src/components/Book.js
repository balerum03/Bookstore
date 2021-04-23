import React from 'react';
import PropTypes from 'prop-types';
import progress_circle from '../assets/progress_circle.png'

const Book = props => {
	const {book, remove} = props;
	return (
		<tbody>
			<tr key={book.id}>
				<div className="book">
					<div className="book-info">
						<td className="book-category">{book.category}</td>
						<td className="book-title">{book.title}</td>
						<td className="book-author">Adan Fernandez B.</td>
						<ul className="book-actions">
							<li><a>Commets</a></li>
							<li><button type='button' onClick={remove} value={book.id} className="remove-btn">Remove</button></li>
							<li><a>Edit</a></li>
						</ul>
					</div>
					<div className="over-all-progress">
						<div>
							<img atl="progress circle" src={progress_circle} />
						</div>
						<div>
							<p className="progress-number">64%</p>
							<p className="completed-text">Completed</p>
						</div>
					</div>
					<div>
						<p className="chapter-info">CURRENT CHAPTER</p>
						<p className="chapter-number">CHAPTER 17</p>
						<button className="btn">UPDATE PROGRESS</button>
					</div>
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