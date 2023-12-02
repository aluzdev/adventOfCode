export function replaceNumbers(str) {
  const numberWords = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  numberWords.forEach((word, index) => {
    const regex = new RegExp(word, "gi");
    str = str.replace(regex, index + 1);
  });
  return str;
}

export function extractDigits(str) {
  return str.replace(/[^\d\n]/g, "");
}

function replaceEdgeCases(str) {
  const numberWords = ["twone", "oneight", "eightwo"];
  numberWords.forEach((word) => {
    const regex = new RegExp(word, "gi");
    if (word === "twone") str = str.replace(regex, 21);
    else if (word === "oneight") str = str.replace(regex, 18);
    else if (word === "eightwo") str = str.replace(regex, 82);
  });
  return str;
}

export function purifyText(str) {
  let result = extractDigits(replaceNumbers(replaceEdgeCases(str)));
  return result;
}
