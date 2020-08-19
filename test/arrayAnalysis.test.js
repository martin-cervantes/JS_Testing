import arrayAnalysis from '../js/arrayAnalysis';

test('Array analysis', () => {
  const test1 = [5, 7, 9, 11, 13];
  const res1 = {
    average: 9,
    min: 5,
    max: 13,
    length: 5,
  };
  const res = arrayAnalysis(test1);
  expect(res1).toEqual(res);
});

test('Incorrect typeof', () => {
  const test2 = [5, 7, 9, 11, '13'];

  expect(() => {
    arrayAnalysis(test2);
  }).toThrow(Error);
});
