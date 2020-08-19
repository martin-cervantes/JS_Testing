const calculator = (num1, num2) => {
  if (typeof num1 === 'number' && typeof num2 === 'number') {
    const add = () => num1 + num2;

    const substract = () => num1 - num2;

    const multiply = () => num1 * num2;

    const divide = () => {
      if (num2 === 0) {
        throw new Error('Can\'t divide by zero');
      } else {
        return num1 / num2;
      }
    };

    return {
      add,
      substract,
      multiply,
      divide,
    };
  }

  throw new Error('Parameter is not typeof number');
};

export default calculator;
