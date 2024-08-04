import React from 'react';
import { FaShoppingCart, FaCheck, FaTimes, FaDollarSign } from 'react-icons/fa';
import { IoMdArrowDropupCircle } from "react-icons/io";
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import Widget from '../Widget/Widget';
import ActivityChart from '../ActivityChart/ActivityChart';
import RecentOrders from '../RecentOrders/RecentOrders';
import CustomerFeedback from '../CustomerFeedback/CustomerFeedback';
import GoalMenu from '../GoalMenu/GoalMenu';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  const widgetsData = [
    { title: "Total Orders", value: "75", icon: <FaShoppingCart /> },
    { title: "Total Delivered", value: "70", icon: <FaCheck /> },
    { title: "Total Cancelled", value: "05", icon: <FaTimes /> },
    { title: "Total Revenue", value: "$12k", icon: <IoMdArrowDropupCircle /> },
    { title: "Net Profit", value: "$6759.25", icon: <FaDollarSign /> }
  ];

  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.main}>
        <Header />
        <div className={styles.widgets}>
          {widgetsData.map((widget, index) => (
            <Widget key={index} title={widget.title} value={widget.value} icon={widget.icon} />
          ))}
        </div>
        <div className={styles.activity}>
          <ActivityChart />
          <GoalMenu />
        </div>
        <div className={styles.ordersFeedback}>
          <RecentOrders />
          <CustomerFeedback />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
