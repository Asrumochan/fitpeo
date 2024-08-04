import React from 'react';
import styles from './RecentOrders.module.css';

const orders = [
  { customer: 'Wade Warren', orderNo: '15478256', amount: '$124.00', status: 'Delivered' },
  { customer: 'Jane Cooper', orderNo: '48965786', amount: '$305.02', status: 'Delivered' },
  { customer: 'Guy Hawkins', orderNo: '78985215', amount: '$45.88', status: 'Cancelled' },
  { customer: 'Kristin Watson', orderNo: '20965732', amount: '$65.00', status: 'Pending' },
  { customer: 'Cody Fisher', orderNo: '95715620', amount: '$545.00', status: 'Delivered' },
  { customer: 'Savannah Nguyen', orderNo: '78514568', amount: '$128.20', status: 'Delivered' }
];

const RecentOrders = () => {
  return (
    <div className={styles.orders}>
      <h3>Recent Orders</h3>
      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Order No.</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.customer}</td>
              <td>{order.orderNo}</td>
              <td>{order.amount}</td>
              <td className={`
                ${order.status === 'Delivered' ? styles['status-delivered'] : ''}
                ${order.status === 'Pending' ? styles['status-pending'] : ''}
                ${order.status === 'Cancelled' ? styles['status-cancelled'] : ''}
              `}>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
