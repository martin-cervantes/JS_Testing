const caesarCipher = (string, key) => {
  if (typeof string === 'string' && typeof key === 'number') {
    let encMsg = '';

    for (let i = 0; i < string.length; i += 1) {
      if (string[i] === string[i].toUpperCase()) {
        encMsg += String.fromCharCode(((string.charCodeAt(i) + key - 65) % 26) + 65);
      } else {
        encMsg += String.fromCharCode(((string.charCodeAt(i) + key - 97) % 26) + 97);
      }
    }

    return encMsg;
  }

  throw new Error('Parameter incorrect typeof');
};

export default caesarCipher;
