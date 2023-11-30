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

export function purifyText(str) {
  let result = replaceNumbers(str);
  result = extractDigits(result);
  return result;
}
