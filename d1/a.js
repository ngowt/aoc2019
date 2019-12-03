const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').toString().split('\n');

const fuel = (mass) => {
    return Math.floor(mass / 3) - 2;
};  
const answer = input.reduce((acc, cv) => {
    return acc += fuel(cv);
}, 0)

console.log(answer); //3297866