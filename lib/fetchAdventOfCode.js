import dotenv from "dotenv";
dotenv.config();
import fetch from "node-fetch";

export default async function fetchAdventOfCode(challengeNumber) {
  const input = await fetch(
    `https://adventofcode.com/2021/day/${challengeNumber}/input`,
    {
      headers: {
        Cookie: `session=${process.env.AOC_COOKIE}`,
      },
    }
  );
  const response = await input.text();
  return response;
}
