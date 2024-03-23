import React, { useState, useEffect } from "react";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import "./App.css";

const App = () => {
  const initialFeedbackState = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [feedback, setFeedback] = useState(initialFeedbackState);
  const [positivePercentage, setPositivePercentage] = useState(0);

  // Ефект для збереження стану feedback у локальному сховищі
  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem("feedback"));
    if (savedFeedback) {
      setFeedback(savedFeedback);
    }
  }, []);

  // Ефект для збереження стану feedback у локальному сховищі при зміні
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
    const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
    const percentage = Math.round((feedback.good / totalFeedback) * 100);
    setPositivePercentage(isNaN(percentage) ? 0 : percentage);
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const handleReset = () => {
    setFeedback(initialFeedbackState);
  };

  return (
    <div>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        updateFeedback={updateFeedback}
        handleReset={handleReset}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positivePercentage={positivePercentage}
        />
      ) : (
        <Notification message="No feedback given yet." />
      )}
    </div>
  );
};

export default App;
