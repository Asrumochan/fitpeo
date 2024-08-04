import React from 'react';
import styles from './GoalMenu.module.css';
import { GoGoal } from "react-icons/go";
import { BiDish } from "react-icons/bi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { FaChevronRight } from "react-icons/fa";

const GoalMenu = () => {
  return (
    <div className={styles.goalMenu}>
      <ul className={styles.goal}>
      <li className={styles.goallist}> <GoGoal /> Goals <span className={styles.endicon}><FaChevronRight /></span></li> 
        <li className={styles.goallist}> <BiDish />  Popular Dishes <span className={styles.endicon}><FaChevronRight /></span></li>
        <li className={styles.goallist}> <MdOutlineRestaurantMenu /> Menus <span className={styles.endicon}><FaChevronRight /></span></li>
      </ul>
    </div>
  );
};

export default GoalMenu;
