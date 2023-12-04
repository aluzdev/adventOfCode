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

function idk(schematic) {
  const cachedSchematic = JSON.parse(sessionStorage.getItem("schematic"));
  const newSchematic =
    cachedSchematic ||
    transformArray(schematic.split("\n").map((row) => row.split("")));
  if (!cachedSchematic) {
    sessionStorage.setItem("schematic", JSON.stringify(newSchematic));
  }

  const setOfSymbols = new Set();
  for (let row of newSchematic) {
    // console.log(row)
    for (let char of row) {
      // console.log(char);
      setOfSymbols.add(char);
    }
    // console.log(setOfSymbols);
  }
  return setOfSymbols;
}

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
      {/* <p>{[...idk(schematic)].sort()}</p> */}
      <p>{sessionStorage.getItem("schematic")}</p>
    </>
  );
}

export default App;
