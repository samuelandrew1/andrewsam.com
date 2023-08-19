import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./NavBar";
import GameGrid from "./GameGrid";
import { Outlet } from "react-router-dom";
import Generes from "./GeneresList";
import { useState } from "react";
import { genres_props } from "./Hooks/UseData";
import PlatformSelector from "./PlatformSelector";
import { platform } from "./Hooks/usePlatform";

export interface GameQuery {
  genres: genres_props | null
  platform: platform | null
}
const GameApp = () => {
  const [GameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

  return (
    <Grid templateAreas={{ lg: `"nav nav" "side main"`, base: `"nav" "main"` }}>
      {/* nav bar */}
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {/* side bar */}
      <Show above="lg">
        <GridItem area="side">
          <Generes selectedGenre={GameQuery.genres} onSelectedGengres={(genres) => setGameQuery({ ...GameQuery, genres })} />
        </GridItem>
      </Show>
      {/* main page */}
      <GridItem area="main">
        <PlatformSelector platformName={GameQuery.platform} onselectedPlatform={(platform) => setGameQuery({ ...GameQuery, platform })} />
        <GameGrid gameQuery={GameQuery} />
      </GridItem>
      <Outlet />
    </Grid>
  );
};

export default GameApp;
