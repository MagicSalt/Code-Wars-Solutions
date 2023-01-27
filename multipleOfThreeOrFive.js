function solution(number){
  let multiples = [];
  let sum = 0;
  
  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      multiples.push(i);
    }
  }
  for (num of multiples) {
    sum += num;
  }
  return sum;
}
