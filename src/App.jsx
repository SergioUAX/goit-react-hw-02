import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import { useState, useEffect } from 'react';

const App = () => {
  
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('savedFeedback');
    if (savedFeedback) {
      return JSON.parse(savedFeedback);
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  });

  useEffect(() => {
    localStorage.setItem('savedFeedback', JSON.stringify(feedback));    
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positiveFeedback = totalFeedback != 0
    ? Math.round((feedback.good / totalFeedback) * 100)
    : 0; 

  const updateFeedback = (feedbackType) => {   
    if (feedbackType === 'reset') {
      setFeedback({
        good: 0,
        neutral: 0,
        bad: 0,
      })
    } else {       
      setFeedback((prevFeedback) => ({
        ...prevFeedback,
        [feedbackType]: prevFeedback[feedbackType] + 1,
      }));
    }    
  }

  return (
    <>
      <Description />
      <Options
        totalFeedback={totalFeedback}
        updateFeedback={ updateFeedback}
      />
      {totalFeedback === 0
        ? (
          <Notification />
        )
        : (
          <Feedback
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            totalFeedback={totalFeedback}
            positiveFeedback={positiveFeedback}
          />
        )}    
    </>
  );
};

export default App;
