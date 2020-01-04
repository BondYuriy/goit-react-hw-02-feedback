const positivePercentage = (total, num) => {
  const result = (num / total) * 100;

  return Math.round(result);
};

export default positivePercentage;
