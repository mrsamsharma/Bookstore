import React from 'react';
import Header from '../components/Header';
import Book from '../components/Book';
import AddBook from '../components/AddBook';

export default function Books() {
  return (
    <>
      <Header />
      <Book title="The Art of Seduction" author="Robert Gren" />
      <AddBook />
    </>
  );
}
