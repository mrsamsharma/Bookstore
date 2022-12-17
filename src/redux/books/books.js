import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const addBook = (payload) => ({ type: 'ADD', payload });
const removeBook = (id) => ({ type: 'REMOVE', id });
const getBooks = (payload) => ({ type: 'GET', payload });
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DwJiw8QxAUA6baUHq2qU/books';

const initialState = [];

export const fetchBooks = createAsyncThunk(
  'books/fetchBooks',
  async (_, { dispatch }) => {
    const res = await axios.get(url);
    const books = [];
    Object.keys(res.data).map((key) => books.push({ item_id: key, ...res.data[key][0] }));
    dispatch(getBooks(books));
  },
);

export const postBook = createAsyncThunk(
  'books/postBook',
  async (payload, { dispatch }) => {
    await axios.post(url, payload);
    dispatch(addBook(payload));
  },
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (id, { dispatch }) => {
    await axios.delete(`${url}/${id}`,
      {
        item_id: id,
      });
    dispatch(removeBook(id));
  },
);

const changeBooks = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'GET':
      return action.payload;
    case 'REMOVE':
      return state.filter((book) => book.item_id !== action.id);
    default:
      return state;
  }
};

export default changeBooks;
