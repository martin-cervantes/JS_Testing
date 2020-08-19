import capitalize from '../js/capitalize';

test('Capitalize string', () => {
  expect(capitalize('martin')).toBe('Martin');
});

test('Capitalize sentence', () => {
  expect(capitalize('martin is using jesp')).toBe('Martin is using jesp');
});

test('Not typeof string', () => {
  expect(() => {
    capitalize(1);
  }).toThrow(Error);
});
