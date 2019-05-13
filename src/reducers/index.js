import { ADD_BOOK, LOAD_BOOKS } from '../actions';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case LOAD_BOOKS:
      return [].concat(action.payload);
    default:
      return state;
  }
}

export default bookReducer;
