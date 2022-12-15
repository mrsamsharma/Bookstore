import { configureStore } from '@reduxjs/toolkit';
import changeBooks from './books/books';
import updateCategories from './categories/categories';

export default configureStore({
  reducer: {
    changeBooks,
    updateCategories,
  },
});
