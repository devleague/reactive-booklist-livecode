import React, { Component } from 'react';
import BookList from '../components/BookList/BookList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pageTitle: `This is Ed's Books:`,
      currentId: 4,
      books: [
        {
          id: 1,
          title: `Physician's Desk Reference`,
          author: 'Dr. NoClue'
        },
        {
          id: 2,
          title: `Harry Potter and Sorceror's Stone`,
          author: 'J.K. Rowling'
        },
        {
          id: 3,
          title: 'Green Eggs and Ham',
          author: 'Dr. Suess'
        }
      ],
      newBook: {
        title: '',
        author: ''
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleOnChange = this.handleTitleOnChange.bind(this);
    this.handleAuthorOnChange = this.handleAuthorOnChange.bind(this);
  }

  handleTitleOnChange(e) {
    const value = e.target.value;
    this.setState({ newBook: {
      title: value,
      author: this.state.newBook.author
    }});
  }

  handleAuthorOnChange(e) {
    const value = e.target.value;
    this.setState({ newBook: {
      title: this.state.newBook.title,
      author: value
    }});
  }

  handleSubmit(e) {
    e.preventDefault();

    // add the book
    let { currentId } = this.state;
    const { newBook: { title, author }, books } = this.state;
    const newBook = { id: currentId, title, author };
    this.setState({ currentId: ++currentId, books: [...books, newBook ]});
  }


  render() {
    return (
      <div className="App">
        <div className="header">
          {this.state.pageTitle}
        </div>

        <BookList books={this.state.books} />

        <div>
          <form>
            <input data-type="title" type="text" onChange={this.handleTitleOnChange} />
            <input data-type="author" type="text" onChange={this.handleAuthorOnChange} />
            <button onClick={this.handleSubmit}>
              Save Book
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
