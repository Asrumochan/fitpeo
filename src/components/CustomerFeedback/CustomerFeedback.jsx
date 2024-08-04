import React from 'react';
import styles from './CustomerFeedback.module.css';
import { CgProfile } from "react-icons/cg";

const feedbacks = [
  {
    customer: 'Jenny Wilson',
    feedback: 'The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger over greens (gluten-free) which was also very good. They were very conscientious about gluten allergies..',
    rating: 4
  },
  {
    customer: 'Dianne Russell',
    feedback: 'We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service.',
    rating: 5
  },
  {
    customer: 'Devon Lane',
    feedback: 'Normally wings are wings Share but theirs are lean meaty and tender',
    rating: 4
  }
];

const CustomerFeedback = () => {
  return (
    <div className={styles.feedback}>
      <h3>Customer's Feedback</h3>
      {feedbacks.map((feedback, index) => (
        <div key={index} className={styles.feedbackItem}>
          <h4><CgProfile />   <strong>{feedback.customer}</strong></h4>
          <p>{feedback.feedback}</p>
          <p>Rating: {'⭐'.repeat(feedback.rating)}{"☆".repeat(5-feedback.rating)}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default CustomerFeedback;
