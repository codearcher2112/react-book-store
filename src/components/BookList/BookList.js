import React, { Component } from 'react';
import './BookList.scss';
import Book from '../Book/Book';
import { bookData } from '../bookData'; 

export default class BookList extends Component {
  state = {
    books: bookData
  };

  removeBook = id => {
    const { books } = this.state;
    const sortedBooks = books.filter(book => book.id !== id);
    this.setState({
      books: sortedBooks
    })
  };

  render() {
    const { books } = this.state;

    return (
      <section className="booklist">
        {books.map(book => {
          return (
            <Book key={book.id} book={book} removeBook={this.removeBook} />
          )
        })}
      </section>
    )
  }
}
