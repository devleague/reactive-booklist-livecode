import React, { useState, useEffect } from 'react';
import BookListHooked from '../BookListHooked';
import BookListTitle from '../../components/BookListTitle';
import AddBookHooked from '../AddBookHooked';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { loadBooks } from '../../actions';

const App = (props) => {
  const [pageTitle] = useState(`This is Ed's Books:`);
  const dispatch = useDispatch();
  const books = useSelector((store) => {
    return store;
  });

  useEffect(() => {
    dispatch(loadBooks());
  }, []);

  return (
    <div className="App">
      <div>
        <BookListTitle title={pageTitle} />
      </div>
      <BookListHooked books={books} />
      <AddBookHooked />
    </div>
  );
};

export default App;
