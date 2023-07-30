import { HStack, Heading, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.webp";
import { ToggleColorMode } from "../../Home-page/components/ColorMode";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} w={"60px"} />
      <Heading>Rawg</Heading>
      <ToggleColorMode />
    </HStack>
  );
};

export default NavBar;
