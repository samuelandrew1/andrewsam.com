import { SimpleGrid, Text } from "@chakra-ui/react";
import useGame, { platform } from "./Hooks/useGame";
import GameCard from "./GameCard";
import { genres_props } from "./Hooks/UseData";

interface props {
  selectedGenres: genres_props | null
  selectedPlatform: platform | null
}
const GameGrid = ({ selectedGenres, selectedPlatform }: props) => {
  const { data, error } = useGame(selectedGenres, selectedPlatform);
  return (
    <SimpleGrid
      columns={{ base: 1, sm: 2, lg: 3 }}
      spacing={4}
      padding={"25px"}
    >
      {error && <Text>{error}</Text>}

      {data.map((game) => (
        <GameCard game={game} key={game.id} />
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
