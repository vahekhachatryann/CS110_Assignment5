const prompt = require('readline-sync');
const { countWords,trim,sumOfRows,sumOfArr,addMatrices,multiplyMatrices} = require('./utils.js');

const wordCountTest = prompt.question("Input something: ");
console.log(countWords(wordCountTest))

const trimTest = prompt.question("Type something: ");
console.log(trim(trimTest))