const fs = require("fs");
const input = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .split("\r\n")
  .map(el => el.split(","));

const intersection = []

const w1Point = [[0, 0]];
const w2Point = [[0, 0]];
const [wire1, wire2] = [input[0], input[1]];

const addCoordinates = (wire, direction, units) => {
  switch (direction) {
    case "L":
      for (let i = 0; i < units; i++) {
        const [lastX, lastY] = wire[wire.length - 1];
        wire.push([lastX - 1, lastY]);
      }
      break;
    case "R":
      for (let i = 0; i < units; i++) {
        const [lastX, lastY] = wire[wire.length - 1];
        wire.push([lastX + 1, lastY]);
      }
      break;
    case "U":
      for (let i = 0; i < units; i++) {
        const [lastX, lastY] = wire[wire.length - 1];
        wire.push([lastX, lastY + 1]);
      }
      break;
    case "D":
      for (let i = 0; i < units; i++) {
        const [lastX, lastY] = wire[wire.length - 1];
        wire.push([lastX, lastY - 1]);
      }
      break;
  }
};

for (let i = 0; i < wire1.length; i++) {
  const [direction, units] = [wire1[i][0], wire1[i].substr(1)];
  addCoordinates(w1Point, direction, units);
}

for (let i = 0; i < wire2.length; i++) {
  const [direction, units] = [wire2[i][0], wire2[i].substr(1)];
  addCoordinates(w2Point, direction, units);
}

const w1 = w1Point.map(c => JSON.stringify(c));
const w2 = w2Point.map(c => JSON.stringify(c));

for (let i = 0; i < w1.length; i++) {
  if (w2.includes(w1[i]) && !intersection.includes(w1[i])) {
    intersection.push(w1[i]);
  }
}

const distances = intersection.map(c => {
  return Math.abs(JSON.parse(c)[0]) + Math.abs(JSON.parse(c)[1]);
});

const shortestDistance = distances.reduce((acc, cv) => {
  if (cv === 0) return acc;
  return cv < acc ? cv : acc;
}, Infinity)

console.log(`Shortest Distance: ${shortestDistance}`);

// (x, y)
