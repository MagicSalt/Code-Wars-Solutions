function disemvowel(str) {
  let string = str.replace(/a/g, '')
                  .replace(/e/g, '')
                  .replace(/i/g, '')
                  .replace(/o/g, '')
                  .replace(/u/g, '')
                  .replace(/A/g, '')
                  .replace(/E/g, '')
                  .replace(/I/g, '')
                  .replace(/O/g, '')
                  .replace(/U/g, '');
  return string;
}
