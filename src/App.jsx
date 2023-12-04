import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styled from "styled-components";
import "./App.css";

import { schematic } from "./utils/constants";
import { transformArray } from "./utils/helperFunctions/schematic";

const SmallLogos = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;

const P = styled.p`
  max-width: 800px;
  margin: 0 auto;
`;

const input = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;

const symbols = ["#", "$", "%", "&", "*", "+", "-", "/", "=", "@"];

function lookForNumbers(schematic, i, j) {
  let sum = 0;
  const somethingWentTerriblyWrong =
    i < 0 ||
    i >= schematic.length ||
    j < 0 ||
    j >= schematic[i].length ||
    !symbols.includes(schematic[i][j]);
  if (somethingWentTerriblyWrong) return;
  const current = schematic[i][j];
  const diagLeft = schematic[i + 1][j - 1];
  const top = schematic[i + 1][j];
  const diagRight = schematic[i + 1][j + 1];
  const left = schematic[i][j - 1];
  const right = schematic[i][j + 1];
  const diagDownLeft = schematic[i - 1][j - 1];
  const down = schematic[i - 1][j];
  const diagDownRight = schematic[i - 1][j + 1];

  console.log({
    current,
    diagLeft,
    top,
    diagRight,
    left,
    right,
    diagDownLeft,
    down,
    diagDownRight,
  });
}

function idk(schematic) {
  const cachedSchematic = JSON.parse(sessionStorage.getItem("schematic"));
  const transformedSchematic =
    cachedSchematic ||
    transformArray(schematic.split("\n").map((row) => row.split("")));
  if (!cachedSchematic) {
    sessionStorage.setItem("schematic", JSON.stringify(transformedSchematic));
  }

  for (let i = 0; i < transformedSchematic.length; i++) {
    for (let j = 0; j < transformedSchematic[i].length; j++) {
      // console.log(transformedSchematic[i][j]);
      const character = transformedSchematic[i][j];
      if (symbols.includes(character)) {
        lookForNumbers(transformedSchematic, i, j);
      }
    }
  }
  // console.log(char);
}

idk(input);
console.log(sessionStorage.getItem("schematic").split(","));

function App() {
  return (
    <>
      <SmallLogos>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </SmallLogos>
      <h1>Advent of Code Day 2</h1>
      <P>{sessionStorage.getItem("schematic").split(",")}</P>
    </>
  );
}

export default App;
