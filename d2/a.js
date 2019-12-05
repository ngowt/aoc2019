const fs = require("fs");
const input = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .split(",");

const pInput = input.map(el => parseInt(el));
pInput[1] = 12;
pInput[2] = 2;
for (let i = 0; i < pInput.length; i++) {
  if (pInput[i] === 99) break;
  switch (pInput[i]) {
    case 1:
      pInput[pInput[i + 3]] = pInput[pInput[i + 1]] + pInput[pInput[i + 2]];
      i += 2;
      break;
    case 2:
      pInput[pInput[i + 3]] = pInput[pInput[i + 1]] * pInput[pInput[i + 2]];
      i += 2;
      break;
  }
}

console.log(pInput[0]); // 3562624
