import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./NavBar";
import GameGrid from "./GameGrid";
import { Outlet } from "react-router-dom";
import Generes from "./GeneresList";


const GameApp = () => {
  return (
    <Grid templateAreas={{ lg: `"nav nav" "side main"`, base: `"nav" "main"` }}>
      {/* nav bar */}
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      {/* side bar */}
      <Show above="lg">
        <GridItem area="side">
          <Generes />
        </GridItem>
      </Show>
      {/* main page */}
      <GridItem area="main">
        <GameGrid />
      </GridItem>
      <Outlet />
    </Grid>
  );
};

export default GameApp;
