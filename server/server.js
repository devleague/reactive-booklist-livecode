const express = require('express');
const bodyParser = require('body-parser');

let bookId = 4;
const PORT = process.env.PORT || 8080;
const books = [
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
];

const app = express();
app.use(bodyParser.json());


app.get('/books', (req, res) => {
  return res.json(books);
});

app.post('/books', (req, res) => {
  const newBook = req.body;
  newBook.id = bookId++;
  books.push(newBook);
  return res.json(newBook);
});


app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
