import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/books';

const Book = (props) => {
  const { id, title, author } = props;
  const dispatch = useDispatch();
  return (
    <div>
      <span>{title}</span>
      <span>{author}</span>
      <button type="button" onClick={() => dispatch(deleteBook(id))}>Remove</button>
    </div>
  );
};

export default Book;

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
