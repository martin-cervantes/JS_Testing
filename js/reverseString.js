const reverseString = string => {
  if (typeof string === 'string') {
    return string.split('').reverse().join('');
  }
  throw new Error('Parameter is not typeof string ');
};

export default reverseString;
