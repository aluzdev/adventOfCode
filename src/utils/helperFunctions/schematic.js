export function findNumberIn2DArray(array2D, position) {
  const [i, j] = position;

  // Check if the position is valid
  if (i < 0 || i >= array2D.length || j < 0 || j >= array2D[i].length) {
    return "Invalid position";
  }

  if (j === 2) {
    let possibleEdgeCase = "";
    const current = array2D[i][j];
    const left = array2D[i][j - 1];
    const leftest = array2D[i][j - 2];

    //check if that position is a number. If it is, add it
    if (current == Number(current)) possibleEdgeCase += current;
    //check if the position left to it is a number. If it is, add it.
    if (left == Number(left)) possibleEdgeCase += left;
    //check if the position two items to the left is a number. "" ""
    if (leftest == Number(leftest)) possibleEdgeCase += leftest;
    if (possibleEdgeCase.length === 3) {
      return Number(possibleEdgeCase.split("").reverse().join(""));
    }
  }

  if (j === 1) {
    let possibleEdgeCase = "";
    const current = array2D[i][j];
    const left = array2D[i][j - 1];
    const leftest = array2D[i][j - 2];

    //check if that position is a number. If it is, add it
    if (current == Number(current)) possibleEdgeCase += current;
    //check if the position left to it is a number. If it is, add it.
    if (left == Number(left)) possibleEdgeCase += left;
    if (possibleEdgeCase.length === 2 && leftest === undefined) {
      return Number(possibleEdgeCase.split("").reverse().join(""));
    }
  }

  // Construct the string from the array row
  const rowString = array2D[i].join("");

  // Find the start of the number
  let start = j;
  while (start >= 0 && rowString[start] !== ".") {
    start--;
  }

  // Find the end of the number
  let end = j;
  while (end < rowString.length && rowString[end] !== ".") {
    end++;
  }

  // Extract the number
  const numberStr = rowString.substring(start + 1, end);
  if (!numberStr.match(/^\d+$/)) {
    return 0;
  }

  // Replace the number with dots in the array
  for (let k = start + 1; k < end; k++) {
    array2D[i][k] = ".";
  }

  return parseInt(numberStr, 10);
}
