import { Box, Flex, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./NavBar";
import GameGrid from "./GameGrid";
import { Outlet } from "react-router-dom";
import Generes from "./GeneresList";
import { useState } from "react";
import { genres_props } from "./Hooks/UseData";
import PlatformSelector from "./PlatformSelector";
import { platform } from "./Hooks/usePlatform";
import SortSelector from "./Hooks/SortSelector";
import GameHeading from "./Hooks/GameHeading";

export interface GameQuery {
  genres: genres_props | null
  platform: platform | null
  sortOrder: string
  searchInput: string
}
const GameApp = () => {
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid templateAreas={{ lg: `"nav nav" "side main"`, base: `"nav" "main"` }}>
      {/* nav bar */}
      <GridItem area="nav">
        <NavBar onsearch={(searchInput =>
          //search bar
          setGameQuery({ ...GameQuery, searchInput }))} />
      </GridItem>
      {/* side bar */}
      <Show above="lg">
        <GridItem area="side">
          <Generes selectedGenre={GameQuery.genres} onSelectedGengres={(genres) => setGameQuery({ ...GameQuery, genres })} />
        </GridItem>
      </Show>
      {/* main page */}
      <GridItem area="main">
        <Box mt={5} m={5}>
          <GameHeading gameQuery={GameQuery} />
          <HStack >
            <PlatformSelector platformName={GameQuery.platform}
              // for platform
              onselectedPlatform={(platform) => setGameQuery({ ...GameQuery, platform })} />
            {/* for sorting game */}
            <SortSelector sortName={GameQuery.sortOrder} onSortSelected={(sortOrder) => setGameQuery({ ...GameQuery, sortOrder })} />
          </HStack>
        </Box>
        {/* for game display */}
        <GameGrid gameQuery={GameQuery} />
      </GridItem>
      <Outlet />
    </Grid>
  );
};

export default GameApp;
