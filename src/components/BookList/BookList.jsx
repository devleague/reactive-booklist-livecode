import React from 'react';
import Book from '../Book';

const BookList = (props) => {
  const bookList = props.books.map((book) => {
    return (
      <Book key={book.id}
       title={book.title}
       author={book.author} />
    );
  });

  return (
    <>
      { bookList }
    </>
  )
}

export default BookList;
