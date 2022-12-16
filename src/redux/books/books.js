import axios from "axios";

const addBook = (payload) => ({ type: 'ADD', payload });
const removeBook = (id) => ({ type: 'REMOVE', id });
const getBooks = (payload) => ({ type: 'GET', payload });
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/DwJiw8QxAUA6baUHq2qU/books';

const initialState = [];

export const fetchBooks = () => async (dispatch) => {
  const res = await axios.get(url);
  const books = [];
  Object.keys(res.data).map((key) => books.push({ id: key, ...res.data[key][0] }));
  dispatch(getBooks(books));
};

export const postBook = (payload) => (dispatch) => {
  dispatch(addBook(payload));
};

export const deleteBook = (id) => (dispatch) => {
  dispatch(removeBook(id));
};

const changeBooks = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'GET':
      return action.payload;
    case 'REMOVE':
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default changeBooks;
