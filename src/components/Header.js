import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
    <nav className={styles.navcontainer}>
      <NavLink className={styles.navlogo} to="/">BookStore CMS</NavLink>
      <ul className={styles.navlinks}>
        <li><NavLink className={styles.navlink} activeStyle={{ background: 'red', color: 'white' }} to="/">Books</NavLink></li>
        <li><NavLink className={styles.navlink} to="/category">Categories</NavLink></li>
      </ul>
    </nav>
  );

export default Header;
