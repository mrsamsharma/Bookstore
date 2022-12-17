import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../components/Header';
import Book from '../components/Book';
import AddBook from '../components/AddBook';
import { fetchBooks } from '../redux/books/books';

export default function Books() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);
  return (
    <>
      <Header />
      <section className="home">
        <div className="books_wrapper">
          {books.map((book) => (
            <Book
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
            />
          ))}
        </div>
        <AddBook />
      </section>
    </>
  );
}
