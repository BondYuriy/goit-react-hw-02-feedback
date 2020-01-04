import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <div>
    <input type="button" name="good" value="Good" onClick={onLeaveFeedback} />
    <input
      type="button"
      name="neutral"
      value="Neutral"
      onClick={onLeaveFeedback}
    />
    <input type="button" name="bad" value="Bad" onClick={onLeaveFeedback} />
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
