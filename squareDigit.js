function squareDigits(num) {
    let numStr = num.toString();
    let result = '';
    for (let i = 0; i < numStr.length; i++) {
        result += Math.pow(parseInt(numStr[i]), 2);
    }
    return parseInt(result);
}
