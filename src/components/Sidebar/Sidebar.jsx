import React from 'react';
import styles from './Sidebar.module.css';
import { FaHome, FaChartBar, FaTasks  } from 'react-icons/fa';
import { CiWallet } from "react-icons/ci";
import { BsMinecartLoaded } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>Logo</div>
      <nav>
        <ul>
          <li><FaHome /> Dashboard</li>
          <li><FaChartBar /> Activity</li>
          <li><FaTasks /> Tasks</li>
          <li><CiWallet/>Wallet</li>
          <li><BsMinecartLoaded/>Cart</li>
          <li className={styles.exit}><IoExitOutline />Exit</li>
        </ul>
      </nav>
      <div>
        <ul>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
