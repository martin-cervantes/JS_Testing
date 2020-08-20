import calculator from '../js/calculator';

test('5 + 5 = 10', () => {
  expect(calculator(5, 5).add()).toBe(10);
});

test('5 + \'5\' = Error', () => {
  expect(() => {
    calculator(5, '5').add();
  }).toThrow(Error);
});

test('5 - 5 = 0', () => {
  expect(calculator(5, 5).substract()).toBe(0);
});

test('5 - \'5\' = Error', () => {
  expect(() => {
    calculator(5, '5').substract();
  }).toThrow(Error);
});

test('5 x 5 = 25', () => {
  expect(calculator(5, 5).multiply()).toBe(25);
});

test('5 x \'5\' = Error', () => {
  expect(() => {
    calculator(5, '5').multiply();
  }).toThrow(Error);
});

test('25 / 5 = 5', () => {
  expect(calculator(25, 5).divide()).toBe(5);
});

test('25 / 0 = Error', () => {
  expect(() => {
    calculator(10, 0).divide();
  }).toThrow(Error);
});
