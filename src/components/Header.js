import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">BookStore CMS</Link></li>
        <li><Link to="/">Books</Link></li>
        <li><Link to="/category">Categories</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
