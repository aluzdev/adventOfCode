export function transformArray(array) {
  return array.map((row) => {
    const newRow = [...row]; // Clone the row to avoid mutating the original array
    let numStr = "";
    let numStartIndex = -1;

    for (let i = 0; i < newRow.length; i++) {
      if (isNumber(newRow[i])) {
        numStr += newRow[i];
        numStartIndex = numStartIndex === -1 ? i : numStartIndex;
      } else {
        if (numStr) {
          newRow.fill(".", numStartIndex, i);
          newRow[i - 1] = parseInt(numStr, 10);
          numStr = "";
          numStartIndex = -1;
        }
      }
    }

    // Handle case where number sequence is at the end of the row
    if (numStr) {
      newRow.fill(".", numStartIndex, newRow.length);
      newRow[newRow.length - 1] = parseInt(numStr, 10);
    }

    return newRow;
  });
}

function isNumber(char) {
  return !isNaN(char) && char !== ".";
}
