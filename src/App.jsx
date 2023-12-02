import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import styled from "styled-components";
import "./App.css";

import { puzzle2 } from "./utils/constants";
import { cubeGamesSolution } from "./utils/helperFunctions/cubeGames";

const SmallLogos = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
`;

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
      <p>{cubeGamesSolution(puzzle2)}</p>
    </>
  );
}

export default App;
