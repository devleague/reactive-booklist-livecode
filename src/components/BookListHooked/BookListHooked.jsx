import React, { useState } from 'react';
import Book from '../Book';

const BookListHooked = (props) => {
  const [input, setInput] = useState('');

  const bookList = props.books
    .filter((book) => {
      return book.title.toLowerCase().includes(input.toLowerCase());
    })
    .map((book) => {
      return <Book key={book.id} title={book.title} author={book.author} />;
    });

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={({ target: { value } }) => {
          setInput(value);
        }}
      />
      {bookList}
    </>
  );
};

export default BookListHooked;
