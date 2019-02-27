import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import BookList from './components/BookList/BookList';
import './App.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <BookList />
      </React.Fragment>
    );
  }
}

export default App;
