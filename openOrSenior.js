function openOrSenior(data){
  let result = [];
  for (pair of data) {
    if (pair[0] >= 55 && pair[1] > 7) {
      result.push('Senior');
    } else {
      result.push('Open');
    }
  }
  return result;
}
