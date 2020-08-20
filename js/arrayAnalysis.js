const arrayAnalysis = (array) => {
  array.forEach(item => {
    if (typeof item !== 'number') {
      throw new Error('Parameter is not typeof number');
    }
  });
  return {
    average: array.reduce((total, current) => total + current) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
};

export default arrayAnalysis;
