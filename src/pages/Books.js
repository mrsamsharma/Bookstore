import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Book from '../components/Book';
import AddBook from '../components/AddBook';
import '../styles.css';

export default function Books() {
  const books = useSelector((state) => state.books);
  return (
    <>
      <Header />
      {books.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}
      <AddBook />
    </>
  );
}
