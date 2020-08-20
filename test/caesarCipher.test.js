import caesarCipher from '../js/caesarCipher';

test('Caesar Cipher', () => {
  expect(caesarCipher('Martin is using jesp', 3)).toBe('Pduwlq=lv=xvlqj=mhvs');
});
