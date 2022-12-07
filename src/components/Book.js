import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author } = props;
  return (
    <div>
      <span>{title}</span>
      <span>{author}</span>
      <button type="button">Remove</button>
    </div>
  );
};

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
