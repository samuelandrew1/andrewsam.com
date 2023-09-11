import {
  Button,
  Flex,
  HStack,

  Icon,
  List,
  ListItem,
  Show,
  Spacer,
  

} from "@chakra-ui/react";
import { useState } from "react";
import { IconType } from "react-icons";
import { FcHome, FcNews } from "react-icons/fc";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
export interface nav {
  tooltip: string;
  icon: IconType;
  id: number;
  text: string;
  link: string;
  hashLink: string
}

export interface props {
  navbar: nav[];
  onClick?: () => void;
}

const NavBar = ({ navbar, }: props) => {
  const [active, setActive] = useState(-1);
  return (
    <HStack>
      {/* <Show above="lg"> */}
      <HStack>
        <Link to='/'>
          <Button leftIcon={<FcHome />} bg={'none'} fontSize={"2xl"} color={"white"} marginLeft={"50px"}>

        Andrew samuel Tamaraprebi
          </Button>
        </Link>
      </HStack>
      {/* </Show> */}
      <Spacer />
      <Link to='blog'>
        <Button bg={'none'} color='white' leftIcon={<FcNews />}>Blog</Button>
      </Link>
      <List>
        <Flex flexDirection={{ base: "column", lg: "row" }}>
          {navbar.map((nav, index) => (
            <HashLink to={nav.hashLink} smooth>
            <ListItem
                key={nav.id}
              p={"10px"}
              bg={active === index ? "blue" : ""}
              onClick={() => {
                setActive(index);
                // onClick();
              }}
              color={"white"}
              borderRadius={"10px"}
              cursor={"pointer"}
              _hover={{
                textDecoration: "overline 7px solid white",
                opacity: 0.8,
              }}
              _active={{ color: "red" }}
              mr={"50px"}
              borderRight={"2px "}
            >

                <Flex key={"FLEX BOX"} alignContent={"center"}>
                  <Icon
                    as={nav.icon}
                    key={nav.text}
                    boxSize={"24px"}
                    color={"green.100"}
                  />
                  <Show above="lg">
                    <Spacer />
                  </Show>

                  {/* fontSize={"lg"}

                    bg={"blackAlpha.100"}
                   */}
                    {nav.text}

                </Flex>{" "}
            </ListItem>
            </HashLink>
          ))}
        </Flex>
      </List>
    </HStack>
  );
};

export default NavBar;
