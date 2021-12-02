import fetchAdventOfCode from "./lib/fetchAdventOfCode.js";

const input = await fetchAdventOfCode(2);

const instructions = input.split("\n").reduce((array, currentValue) => {
  const movementDistance = currentValue.split(" ");
  return [
    ...array,
    { movement: movementDistance[0], distance: Number(movementDistance[1]) },
  ];
}, []);

const position = { horizontal: 0, depth: 0 };
let aim = 0;

for (let index = 0; index < instructions.length; index++) {
  const move = instructions[index];
  if (move.movement === "forward") {
    position.horizontal = position.horizontal + move.distance;
    const gain = aim * move.distance;
    position.depth = position.depth + gain;
  } else if (move.movement === "up") {
    aim = aim - move.distance;
  } else if (move.movement === "down") {
    aim = aim + move.distance;
  }
}

console.log(position.horizontal * position.depth);

export {};
