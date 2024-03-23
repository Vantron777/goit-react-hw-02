import React from "react";

const Options = ({ updateFeedback, handleReset, totalFeedback }) => {
  return (
    <div>
      <h2>Leave your feedback</h2>
      <button onClick={() => updateFeedback("good")}>Good</button>
      <button onClick={() => updateFeedback("neutral")}>Neutral</button>
      <button onClick={() => updateFeedback("bad")}>Bad</button>
      {totalFeedback > 0 && <button onClick={handleReset}>Reset</button>}
    </div>
  );
};

export default Options;
