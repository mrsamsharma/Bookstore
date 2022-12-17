import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <header>
    <div className={styles.header}>
      <nav>
        <Link to="/" className={styles.logo}>BookStore CMS</Link>
        <ul>
          <li><Link to="/" className={styles.link}>Books</Link></li>
          <li><Link to="/category" className={styles.link}>Categories</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
