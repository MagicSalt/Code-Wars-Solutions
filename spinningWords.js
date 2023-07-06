function spinWords(string) {
    let words = string.split(' ');
    let newWords = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].length >= 5) {
            newWords.push(words[i].split('').reverse().join(''));
        } else {
            newWords.push(words[i]);
        }
    }
    return newWords.join(' ');
}
