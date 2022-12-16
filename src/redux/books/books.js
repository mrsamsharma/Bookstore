const addBook = (payload) => ({ type: 'ADD', payload });
const removeBook = (id) => ({ type: 'REMOVE', id });

const initialState = [
  {
    id: 1,
    title: 'The Horizon',
    author: 'Sam Felice'
  },
  {
    id: 2,
    title: 'The Horizon Part 2',
    author: 'Sam Felice'
  },
];

const changeBooks = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'REMOVE':
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default changeBooks;
export { addBook, removeBook };
