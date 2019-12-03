const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8').toString().split('\n');

const fuel = (mass) => {
    const res = Math.floor(mass / 3) - 2;
    return res > 0 ? res : 0;
};

const fuelSeries = (f, total = 0) => {
    while (f > 0) {
      total += fuel(f);
      f = fuel(f);
    }
    return total;
  }
  
const answer = input.reduce((acc, cv) => {
    return acc += fuelSeries(cv);
}, 0)

console.log(answer); //4943923