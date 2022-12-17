import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteBook } from '../redux/books/books';
import styles from './Book.module.scss';

const Book = (props) => {
  /* eslint-disable */
  const { item_id, title, author } = props;
  /* eslint-enable */
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.book_wrapper}>
        <div className={styles.content_wrapper}>
          <div className={styles.content}>
            <span className={styles.title}>{title}</span>
            <span className={styles.author}>{author}</span>
          </div>
          <div className={styles.actions}>
            <button
              className={styles.button}
              type="button"
              onClick={() => dispatch(deleteBook(item_id))}
            >
              Remove
            </button>
            <button type="button" className={styles.button}>Edit</button>
            <button type="button" className={styles.button}>Comment</button>
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.progress_info}>
            <i className={styles.circle} />
            <div className={styles.progress}>
              <span>64%</span>
              <span>Completed</span>
            </div>
          </div>
          <hr />
          <div className={styles.chapter_info}>
            <div className={styles.chapter}>
              <span>Current Chapter</span>
              <span>Chapter 10</span>
            </div>
            <button className="button" type="button">Update progress</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Book;

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  item_id: PropTypes.string.isRequired,
};
