import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './ActivityChart.module.css';

const data = [
  { name: '5', activity: 4000 },
  { name: '6', activity: 3000 },
  { name: '7', activity: 2000 },
  { name: '8', activity: 2780 },
  { name: '9', activity: 1890 },
  { name: '10', activity: 2390 },
  { name: '11', activity: 3490 },
  { name: '12', activity: 2000 },
  { name: '13', activity: 2780 },
  { name: '14', activity: 1890 },
  { name: '15', activity: 2390 },
  { name: '16', activity: 3490 },
  { name: '17', activity: 4000 },
  { name: '18', activity: 3000 },
  { name: '19', activity: 2000 },
  { name: '20', activity: 2780 },
  { name: '21', activity: 1890 }
];

const ActivityChart = () => {
  return (
    <div className={styles.activityChart}>
      <h3>Activity</h3>
      <ResponsiveContainer width={800} height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          
          <Bar dataKey="activity" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ActivityChart;
