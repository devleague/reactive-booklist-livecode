import React, { useState, useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAsync } from '../../actions';

const AddBookHooked = (props) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const titleRef = useRef(null);
  const dispatch = useDispatch();

  // set input on title input only once
  useEffect(() => {
    titleRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBookAsync({ title, author }));
    setTitle('');
    setAuthor('');
    titleRef.current.focus();
  };

  return (
    <form>
      <input
        ref={titleRef}
        type="text"
        value={title}
        onChange={({ target: { value } }) => {
          setTitle(value);
        }}
      />
      <input
        type="text"
        value={author}
        onChange={({ target: { value } }) => {
          setAuthor(value);
        }}
      />
      <button onClick={handleSubmit}>Save Book</button>
    </form>
  );
};

export default AddBookHooked;
