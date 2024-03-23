import React from "react";

const Feedback = ({ feedback, totalFeedback }) => {
  const percentage = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div>
      <h2>Statistics</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total feedback: {totalFeedback}</p>
      <p>
        Percentage of positive feedback: {isNaN(percentage) ? 0 : percentage}%
      </p>
    </div>
  );
};

export default Feedback;
