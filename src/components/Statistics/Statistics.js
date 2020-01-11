import React from 'react';
import PropTypes from 'prop-types';
import FEEDBECK_LABEL from '../../services/constants';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <p>{`${FEEDBECK_LABEL.good}: ${good}`}</p>
    <p>{`${FEEDBECK_LABEL.neutral}: ${neutral}`}</p>
    <p>{`${FEEDBECK_LABEL.bad}: ${bad}`}</p>
    <p>{`${FEEDBECK_LABEL.total}: ${total}`}</p>
    <p>{`${FEEDBECK_LABEL.positineFeedbek}: ${positivePercentage}%`}</p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
