import React from 'react';

const Book = (props) => {
  const { title, author } = props;

  return (
    <div>
      <div>{title}</div>
      <div>{author}</div>
    </div>
  );
}

export default Book;
