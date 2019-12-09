const fs = require("fs");
const [start, end] = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .split("-")
  .map(num => parseInt(num));

const hasSixChars = n => {
  return n.toString().length === 6;
};

const hasSameAdjacentDigit = n => {
  return n
    .toString()
    .split("")
    .some((v, i, arr) => {
      if (i <= arr.length - 2 && v === arr[i + 1] && v === arr[i + 2])
        return false;
      if (i >= 2 && v === arr[i - 1] && v === arr[i - 2]) return false;
      if (v === arr[i - 1] && v === arr[i + 1]) return false;
      return v === arr[i + 1];
    });
};

const isOnlyIncreasing = n => {
  return n
    .toString()
    .split("")
    .every((v, i, arr) => {
      if (i === arr.length - 1) return true;
      return v <= arr[i + 1];
    });
};

const numPasswords = Array(end - start + 1)
  .fill()
  .map((_, idx) => start + idx)
  .filter(n => {
    return hasSixChars(n) && hasSameAdjacentDigit(n) && isOnlyIncreasing(n);
  }).length;

console.log(`Answer: ${numPasswords}`);
