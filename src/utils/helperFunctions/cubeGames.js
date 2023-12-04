export const transformIntoArray = (gameString) => {
  const games = [];
  const gameLines = gameString.trim().split("\n");

  gameLines.forEach((line) => {
    const [gameName, rounds] = line.split(":");
    const roundData = rounds.split(";");

    roundData.forEach((round, index) => {
      let rounds = round.split(",");
      let colorCount = {};
      for (let round of rounds) {
        const [count, color] = round.trim().split(" ");
        colorCount[color] = Number(count);
      }

      games.push({
        name: gameName.trim(),
        round: index + 1,
        red: colorCount.red || 0,
        blue: colorCount.blue || 0,
        green: colorCount.green || 0,
      });
    });
  });
  return games;
};

export const filterImpossibleGames = (
  games,
  maxRed = 12,
  maxGreen = 13,
  maxBlue = 14
) => {
  // Group games by name
  const groupedGames = games.reduce((acc, game) => {
    acc[game.name] = acc[game.name] || [];
    acc[game.name].push(game);
    return acc;
  }, {});

  // Filter out games based on the criteria
  return Object.keys(groupedGames).filter((gameName) => {
    const rounds = groupedGames[gameName];
    const hasTooManyRed = rounds.some((round) => round.red > maxRed);
    const hasTooManyGreen = rounds.some((round) => round.green > maxGreen);
    const hasTooManyBlue = rounds.some((round) => round.blue > maxBlue);

    return !(hasTooManyRed || hasTooManyGreen || hasTooManyBlue);
  });
};

export function sumGameIds(games) {
  const arrayOfGameIds = games.map((game) => Number(game.match(/\d+/)[0]));
  const sumOfGameIds = arrayOfGameIds.reduce((acc, curr) => acc + curr);
  return sumOfGameIds; // 2239
}

/*
  Question: What is the sum of the IDs of all possible games? 
  1) transform text into some data structure (array)
  2) filter impossible games 
  3) add the ids of remaining games
  4) return the sum
  */
export function cubeGamesSolution(puzzle2) {
  return sumGameIds(filterImpossibleGames(transformIntoArray(puzzle2)));
}

export function cubeGamesPartTwoSolution(puzzle2) {
  const games = puzzle2.split("\n");
  let powerOfCubes = 0;

  games.forEach((game) => {
    const [_, rounds] = game.split(": ");
    const cubeCounts = { red: 0, green: 0, blue: 0 };
    rounds.split("; ").forEach((round) => {
      round.split(", ").forEach((countAndColor) => {
        const [count, color] = countAndColor.split(" ");
        cubeCounts[color] = Math.max(cubeCounts[color], Number(count));
      });
    });
    let powerOfCube = 1;
    Object.values(cubeCounts).forEach((count) => (powerOfCube *= count));
    powerOfCubes += powerOfCube;
  });
  return powerOfCubes;
}
