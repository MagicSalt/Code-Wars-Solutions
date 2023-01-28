function rot13(message){
  const alphabetLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const alphabetUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let rot13String = '';
  
  for (char of message) {
    if (alphabetLower.includes(char) && alphabetLower.indexOf(char) + 13 <= 25) {
      rot13String += alphabetLower[alphabetLower.indexOf(char) + 13];
    } else if (alphabetLower.includes(char) && alphabetLower.indexOf(char) + 13 > 25) {
      rot13String += alphabetLower[(alphabetLower.indexOf(char) + 13) - 26];
    } else if (alphabetUpper.includes(char) && alphabetUpper.indexOf(char) + 13 <= 25) {
      rot13String += alphabetUpper[alphabetUpper.indexOf(char) + 13];
    } else if (alphabetUpper.includes(char) && alphabetUpper.indexOf(char) + 13 > 25) {
      rot13String += alphabetUpper[(alphabetUpper.indexOf(char) + 13) - 26];
    } else {
      rot13String += char;
    }
  }
  return rot13String;
}
