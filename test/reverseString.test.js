import reverseString from '../js/reverseString';

test('Capitalize string', () => {
  expect(reverseString('Martin')).toBe('nitraM');
});

test('Capitalize sentence', () => {
  expect(reverseString('Martin is using jesp')).toBe('psej gnisu si nitraM');
});

test('Not typeof string', () => {
  expect(() => {
    reverseString(1);
  }).toThrow(Error);
});
