import React, { Component } from 'react';
import total from '../../services/total';
import positivePercentage from '../../services/positivePercentage';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';

export default class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleAddsFeedback = evt => {
    const { name } = evt.target;

    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    const totalFeedback = total(good, neutral, bad);

    const positiveFeedback = positivePercentage(
      total(good, neutral, bad),
      good,
    );

    return (
      <div>
        <h1>Please leave feedback</h1>
        <FeedbackOptions onLeaveFeedback={this.handleAddsFeedback} />
        <h2>Statistics</h2>
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedback}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  }
}
