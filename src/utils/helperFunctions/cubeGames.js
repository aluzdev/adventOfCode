export const parseGames = (gameString) => {
  const games = [];
  const gameLines = gameString.trim().split("\n");

  gameLines.forEach((line) => {
    const [gameName, rounds] = line.split(":");
    const roundData = rounds.split(";").map((round) => round.trim());

    roundData.forEach((round, index) => {
      const colors = round.split(",").reduce((acc, colorCount) => {
        const [count, color] = colorCount.trim().split(" ");
        acc[color] = parseInt(count, 10);
        return acc;
      }, {});

      games.push({
        name: gameName.trim(),
        round: index + 1,
        red: colors.red || 0,
        blue: colors.blue || 0,
        green: colors.green || 0,
      });
    });
  });

  //   console.table(games);

  return games;
};

export const filterGames = (
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

export function extractGameNumber(gameString) {
  console.log(gameString);
  const match = gameString.match(/\d+/); // Regular expression to find one or more digits
  return match ? Number(match[0]) : null; // Convert the matched string to a number
}
