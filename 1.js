import fetchAdventOfCode from "./lib/fetchAdventOfCode.js";

async function run() {
  const input = await fetchAdventOfCode(1);

  const inputArray = input.split("\n").map(Number);

  function reduceIncreased(increased, currentValue, index, array) {
    if (index === 0) {
      return increased;
    } else if (currentValue > array[index - 1]) {
      increased++;
      return increased;
    }
    return increased;
  }

  function countIncreasedTriplets(array) {
    const tripletSums = array.map(
      (depth, index, array) => depth + array[index + 1] + array[index + 2]
    );

    return tripletSums.reduce(reduceIncreased, 0);
  }

  console.log(countIncreasedTriplets(inputArray));
}

run();
