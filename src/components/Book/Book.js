import React, { Component } from 'react';
import './Book.scss';

export default class Book extends Component {
  state = {
    showInfo: false
  };

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    });
  };

  render() {
    const { id, book, img, pages, info} = this.props.book;
    const { removeBook } = this.props;

    return (
      <div className="book">
        <div className="img-container">
          <img 
            src={img} alt="book cover"
          />
          <span className="close-btn" 
                onClick={() => {
                  removeBook(id);
                }}
          >
            <i className="fas fa-window-close"></i>
          </span>
        </div>
        <div className="book-info">
          <h3>{book}</h3>
          <h4>Pages: {pages}</h4>
          <h5>
            Book Info
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down"></i>
            </span>
          </h5>
          {this.state.showInfo && <p>{info}</p>}
        </div>
      </div>
    )
  }
}
