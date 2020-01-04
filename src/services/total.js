const total = (...args) => {
  const result = args.reduce((arg, acc) => acc + arg, 0);

  return result;
};

export default total;
