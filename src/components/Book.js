import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/books';

const Book = (props) => {
  /* eslint-disable */
  const { item_id, title, author } = props;
  /* eslint-enable */
  const dispatch = useDispatch();
  return (
    <div>
      <span>{title}</span>
      <span>{author}</span>
      <button type="button" onClick={() => dispatch(deleteBook(item_id))}>Remove</button>
    </div>
  );
};

export default Book;

Book.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
