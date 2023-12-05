// export function transformArray(array) {
//   return array.map((row) => {
//     const newRow = [...row]; // Clone the row to avoid mutating the original array
//     let numStr = "";
//     let numStartIndex = -1;

//     for (let i = 0; i < newRow.length; i++) {
//       if (isNumber(newRow[i])) {
//         numStr += newRow[i];
//         numStartIndex = numStartIndex === -1 ? i : numStartIndex;
//       } else {
//         if (numStr) {
//           newRow.fill(".", numStartIndex, i);
//           newRow[i - 1] = parseInt(numStr, 10);
//           numStr = "";
//           numStartIndex = -1;
//         }
//       }
//     }

//     // Handle case where number sequence is at the end of the row
//     if (numStr) {
//       newRow.fill(".", numStartIndex, newRow.length);
//       newRow[newRow.length - 1] = parseInt(numStr, 10);
//     }

//     return newRow;
//   });
// }

// function isNumber(char) {
//   return !isNaN(char) && char !== ".";
// }

export function findNumberIn2DArray(array2D, position) {
  const [i, j] = position;

  // Check if the position is valid
  if (i < 0 || i >= array2D.length || j < 0 || j >= array2D[i].length) {
    return "Invalid position";
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
