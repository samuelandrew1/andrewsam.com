import "./App.css";

import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import GameApp from "./RawgGame/components/GameApp";
import NavBar from "./Home-page/components/NavBar";
import NavObject from "./Home-page/components/Nav-Object";
import MobileNav from "./Home-page/components/MobileNav";
import { Routes, Route, } from "react-router-dom";
import img from "./assets/Images/pageBack.jpg";
import HomeApp from "./Home-page/components/Home-App";
import ExpenseApp from "./ExpenseTraker/components/ExpenseApp";
import BlogHome from "./Blog-Page/Blog-Home";
import ContactApp from "./Contacts-Page/Contact-App";
import ProjectHome from "./Home-page/Project-Page/Project-Home";
import projecObject from "./Home-page/Project-Page/Project-Object";

function App() {
  function handleClick() {
    console.log(" ")


  }
  return (
    <Grid templateAreas={{ lg: `"nav " " main"`, base: `"nav" "main"` }}>
      {/* nav bar */}
      <GridItem
        area="nav"
        position={"fixed"}
        w={"100%"}
        zIndex={999}

        borderBottom='3px solid brown'
        bg='#2f304c'
      >
        <Show above="lg">
          <NavBar navbar={NavObject} onClick={handleClick} />

        </Show>
        <Show below="lg">
          <MobileNav navbar={NavObject} onClick={handleClick} />
        </Show>
      </GridItem>
      {/* side bar */}

      {/* main page */}
      <GridItem area="main"
        position={"absolute"}
        

        top={{ base: 57, lg: 0 }} w={"100%"}>

        <Routes>
          <Route path="/" element={<HomeApp />} />    
          <Route path="blog" element={<BlogHome />} />

          <Route path="contact" element={<ContactApp />} />

          <Route path="project" element={<ProjectHome projectItems={projecObject} />} />
          <Route path="gamehub" element={<GameApp />} />
          <Route path="expenseTracker" element={<ExpenseApp />} />
        </Routes> 
      </GridItem>
    </Grid>
  );
}

export default App;
