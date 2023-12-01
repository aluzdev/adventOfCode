import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { puzzle2 } from "./utils/constants";
import {
  parseGames,
  filterGames,
  extractGameNumber,
} from "./utils/helperFunctions/cubeGames";

function App() {
  /*
  Question: What is the sum of the IDs of all possible games? 
  1) transform text into some data structure (array)
  2) filter impossible games 
  3) add the ids of remaining games
  4) return the sum
  */

  const result = filterGames(parseGames(puzzle2));
  // console.log({ result });
  const realResult = result.map((game) => Number(game.match(/\d+/)[0]));
  console.log({ realResult });
  const realrealrealfrthistime = realResult.reduce((acc, curr) => {
    console.log({ acc, curr });
    return acc + curr;
  });
  return (
    <>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Advent of Code Day 2</h1>
      <p>{realrealrealfrthistime}</p>
    </>
  );
}

export default App;
