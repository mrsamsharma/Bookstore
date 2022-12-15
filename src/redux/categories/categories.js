const status = () => ({ type: 'STATUS' });

const initialState = '';

const updateCategories = (state = initialState, action) => {
  switch (action.type) {
    case 'STATUS':
      return 'Under construction';
    default:
      return state;
  }
};

export default updateCategories;
export { status };
