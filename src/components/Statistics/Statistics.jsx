import React from 'react';
import css from './statistics.module.css'


const Statistics = ({ feedbackCounter }) => {
  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedbackCounter;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const { good } = feedbackCounter;
    const totalFeedback = countTotalFeedback();
    if (totalFeedback === 0) {
      return 0;
    }
    return (good / totalFeedback) * 100;
  };

  const totalFeedback = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div>
      <h2 className={css.stats}>Statistics</h2>
      <ul className={css.list}>
        <li>Good: {feedbackCounter.good}</li>
        <li>Neutral: {feedbackCounter.neutral}</li>
        <li>Bad: {feedbackCounter.bad}</li>
        <li>Total Feedback: {totalFeedback}</li>
        <li>Positive Percentage: {positivePercentage}%</li>
      </ul>
    </div>
  );
};

export default Statistics;
