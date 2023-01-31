function moveZeros(arr) {
  let result = [];
  let count = 0;
  
  for (element of arr) {
    if (element === 0) {
      count++;
    }
    if (element !== 0) {
      result.push(element);
    }
  }
  for (let i = 0; i < count; i++) {
    result.push(0);
  }
  return result;
}
