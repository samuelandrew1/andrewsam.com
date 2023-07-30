import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame from "./Hooks/useGame";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { error, games } = useGame();
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, lg: 3 }}
      spacing={4}
      padding={"25px"}
    >
      {error && <Text>{error}</Text>}

      {games.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
