import { useState } from "react";
import FeedBackOptions from "components/FeedbackOptions";
import Section from "components/Section";
import Statistics from "components/Statistics";

const App = () => {

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    option === 'good'
      ? setGood(prev => prev + 1)
      : option === 'bad'
      ? setBad(prev => prev + 1)
      : setNeutral(prev => prev + 1);
  };

  const onTotalScore = () => {
    return  good + neutral + bad;
  }
  
  const onPercentage = () => {
    return Math.round((good / (good + bad + neutral)) * 100);
  }

    return (
      <Section title="Please leave feedback">
        <FeedBackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={onTotalScore()}
          percent={onPercentage()}
        />
      </Section>
    );


}

export default App;