import React from 'react';
import styles from './Widget.module.css';

const Widget = ({ title, value, icon }) => {
  return (
    <div className={styles.widget}>
      <div className={styles.icon}>{icon}</div>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
};

export default Widget;
