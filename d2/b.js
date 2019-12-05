const fs = require("fs");
const input = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .split(",");

const pInput = input.map(el => parseInt(el));
const TARGET = 19690720;

const generateIntCode = (noun, verb) => {
  const inp = [...pInput];
  inp[1] = noun;
  inp[2] = verb;
  for (let i = 0; i < inp.length; i++) {
    if (inp[i] === 99) break;
    switch (inp[i]) {
      case 1:
        inp[inp[i + 3]] = inp[inp[i + 1]] + inp[inp[i + 2]];
        i += 2;
        break;
      case 2:
        inp[inp[i + 3]] = inp[inp[i + 1]] * inp[inp[i + 2]];
        i += 2;
        break;
    }
  }
  return inp[0];
};

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    const res = generateIntCode(i, j);
    if (res === TARGET) {
      console.log(`Noun: ${i}, Verb: ${j}`);  // Noun: 82, Verb: 98
      console.log(100 * i + j);               // 8298
      break;
    }
  }
}