import { configureStore } from '@reduxjs/toolkit';
import books from './books/books';
import updateCategories from './categories/categories';

export default configureStore({
  reducer: {
    books,
    updateCategories,
  },
});
