import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./NavBar";
import GameGrid from "./GameGrid";
import { Outlet } from "react-router-dom";
import Generes from "./GeneresList";
import { useState } from "react";
import { genres_props } from "./Hooks/UseData";
import PlatformSelector from "./PlatformSelector";
import { platform } from "./Hooks/usePlatform";


const GameApp = () => {
  const [selectedGenres, setselectedGenres] = useState<genres_props | null>(null)
  const [platform, setPlatform] = useState<platform | null>(null)

  return (
    <Grid templateAreas={{ lg: `"nav nav" "side main"`, base: `"nav" "main"` }}>
      {/* nav bar */}
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {/* side bar */}
      <Show above="lg">
        <GridItem area="side">
          <Generes selectedGenre={selectedGenres} onSelectedGengres={(genres) => setselectedGenres(genres)} />
        </GridItem>
      </Show>
      {/* main page */}
      <GridItem area="main">
        <PlatformSelector onselectedPlatform={(platform) => setPlatform(platform)} />
        <GameGrid selectedPlatform={platform} selectedGenres={selectedGenres} />
      </GridItem>
      <Outlet />
    </Grid>
  );
};

export default GameApp;
