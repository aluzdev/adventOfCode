import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { puzzle2 } from "./utils/puzzle2";
import { purifyText } from "./utils/helperFunctions";

function App() {
  let purifiedText = purifyText(puzzle2);

  function goodCoding(purifiedText) {
    purifiedText = purifiedText.split("\n");

    let result = 0;
    for (let text of purifiedText) {
      // console.log({ text });
      let firstNumber = text[0];
      let lastNumber = text[text.length - 1];

      let firstAndLast = firstNumber + lastNumber;
      // console.log({ firstAndLast });

      result = result + Number(firstAndLast);
      console.log({ result });
    }
    return result;
  }

  goodCoding(purifiedText);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Advent of Code</h1>

      <p>{goodCoding(purifiedText)}</p>
      <p>purifiedText: {purifiedText}</p>
    </>
  );
}

export default App;
