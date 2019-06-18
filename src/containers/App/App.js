import React, { Component } from 'react';
import BookList from '../../components/BookList';
import BookListTitle from '../../components/BookListTitle';
import AddBookHooked from '../../components/AddBookHooked';
import { connect } from 'react-redux';
import './App.css';
import { loadBooks } from '../../actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: `This is Ed's Books:`,
    };
  }

  componentDidMount() {
    return this.props.loadBooks();
  }

  render() {
    return (
      <div className="App">
        <BookListTitle title={this.state.pageTitle} />
        <BookList books={this.props.books} />
        <AddBookHooked />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    books: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadBooks: () => {
      return dispatch(loadBooks());
    },
  };
};

App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default App;
