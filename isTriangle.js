function isTriangle(a,b,c) {
  let sideLengths = [a, b, c];
  
  sideLengths.sort((a, b) => a - b);
  
  if (sideLengths[0] + sideLengths[1] > sideLengths[2]) {
    return true;
  } else {
    return false;
  }
}
