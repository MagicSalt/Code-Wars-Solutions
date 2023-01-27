function createPhoneNumber(numbers){
  let numberString = numbers.toString();
  let numberString2 = numberString.replace(/,/g, '');
  let phoneNumber = '(' + numberString2.slice(0, 3) + ') ' + numberString2.slice(3, 6) + '-' + numberString2.slice(5-9);
  return phoneNumber;
}
