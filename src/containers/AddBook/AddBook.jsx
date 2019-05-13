import React, { Component, createRef } from 'react';
import { connect } from 'react-redux';
import { addBookAsync } from '../../actions';

class AddBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      author: ''
    };

    this.titleInputRef = createRef();

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleOnChange = this.handleTitleOnChange.bind(this);
    this.handleAuthorOnChange = this.handleAuthorOnChange.bind(this);
  }

  handleTitleOnChange(e) {
    const value = e.target.value;
    this.setState({ title: value });
  }

  handleAuthorOnChange(e) {
    const value = e.target.value;
    this.setState({ author: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const { title, author } = this.state;

    // dispatch on props - from mapDispatchToProps
    this.props.onAdd({
      title,
      author
    });

    // clear input / reset state
    this.setState({
      title: '',
      author: ''
    });

    this.titleInputRef.current.focus();
  }

  componentDidMount() {
    this.titleInputRef.current.focus();
  }

  render() {
    return (
      <form>
        <input ref={this.titleInputRef} data-type="title" type="text" value={this.state.title} onChange={this.handleTitleOnChange} />
        <input data-type="author" type="text" value={this.state.author} onChange={this.handleAuthorOnChange} />
        <button onClick={this.handleSubmit}>
          Save Book
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (book) => {
      dispatch(addBookAsync(book));
    }
  }
};

AddBook = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBook);

export default AddBook;
