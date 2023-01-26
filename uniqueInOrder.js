var uniqueInOrder=function(iterable){
  let result = [];
  
  for (char of iterable) {
    let lastElement = result.slice(-1);
    if (char != lastElement)
    result.push(char);
  }
  return result;
}
