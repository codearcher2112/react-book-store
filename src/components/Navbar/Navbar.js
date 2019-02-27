import React from 'react';
import './Navbar.scss';
import logo from '../../logo.png';

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="navbar-logo-link">
        <img src={logo} className="navbar-logo" alt="bookstore logo" />
      </a>
      <ul className="nav-links">
        <li><a href="/" className="nav-link">Home</a></li>
        <li><a href="/" className="nav-link">About</a></li>
        <li><a href="/" className="nav-link active">Bookstore</a></li>
      </ul>
    </nav>
  )
}
