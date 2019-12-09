const fs = require("fs");
const input = fs
  .readFileSync("input.txt", "utf8")
  .toString()
  .split("\r\n")
  .map(el => el.split(","));

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

wire1.forEach(v => {
    const [direction, units] = [v[0], v.substr(1)];
    addCoordinates(w1Point, direction, units);
});

wire2.forEach(v => {
    const [direction, units] = [v[0], v.substr(1)];
    addCoordinates(w2Point, direction, units);
});

const w1 = w1Point.map(c => JSON.stringify(c));
const w2 = w2Point.map(c => JSON.stringify(c));

const intersection = w1
  .filter(c => w2.includes(c))
  .map(c => {
    return JSON.stringify(JSON.parse(c).concat(w1.indexOf(c) + w2.indexOf(c)));
  });

const distances = intersection.map(c => Math.abs(JSON.parse(c)[2]));

const shortestDistance = distances.reduce((acc, cv) => {
  if (cv === 0) return acc;
  return cv < acc ? cv : acc;
}, Infinity);

console.log(`Shortest Distance: ${shortestDistance}`);
