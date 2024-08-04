import React from 'react';
import styles from './Header.module.css';
import { FaBell, FaEnvelope , FaCog } from 'react-icons/fa';
import { CgProfile } from "react-icons/cg";

const Header = () => {
  return (
    <header className={styles.header}>
      <input type="text" placeholder="🔍Search" className={styles.search} />
      <div>
        <ul className={styles.icons}>
        <li><FaEnvelope /></li>
        <li><FaCog /></li>
        <li><FaBell /></li>
        <li><CgProfile /></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
