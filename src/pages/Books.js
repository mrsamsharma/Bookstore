import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import Book from '../components/Book';
import AddBook from '../components/AddBook';
import { fetchBooks } from '../redux/books/books';
import '../styles.css';

export default function Books() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (
    <>
      <Header />
      {books.map((book) => (
        <Book key={book.item_id} item_id={book.item_id} title={book.title} author={book.author} />
      ))}
      <AddBook />
    </>
  );
}
