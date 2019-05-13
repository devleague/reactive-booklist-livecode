/**
 * ACTIONS
 */
export const ADD_BOOK = 'ADD_BOOK';
export const LOAD_BOOKS = 'LOAD_BOOKS';

/**
 * Action Creators
 */
export function addBook(newBook) {
  return {
    type: ADD_BOOK,
    payload: newBook
  }
}

export const addBookAsync = (book) => {
  return (dispatch) => {
    // call out to server
    return fetch('/books', {
      method: 'POST',
      body: JSON.stringify(book),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      return dispatch({
        type: ADD_BOOK,
        payload: body
      });
    });
  }
}

export const loadBooks = () => {
  return (dispatch) => {
    return fetch('/books')
    .then((response) => {
      return response.json();
    })
    .then((books) => {
      return dispatch({
        type: LOAD_BOOKS,
        payload: books
      });
    });
  }
}
