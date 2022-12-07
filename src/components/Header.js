import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><a href="/">BookStore CMS</a></li>
        <li><Link to='books'>Books</Link></li>
        <li><Link to='category'>Categories</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
