import React from 'react';
import css from './feedbackOptions.module.css'


const FeedbackOptions = ({ handleFeedback }) => {
  return (
    <div className={css.buttonContainer}>
      <button onClick={() => handleFeedback('good')} className={css.button}>Good</button>
      <button onClick={() => handleFeedback('neutral')} className={css.button}>Neutral</button>
      <button onClick={() => handleFeedback('bad')} className={css.button}>Bad</button>
    </div>
  );
};

export default FeedbackOptions;
