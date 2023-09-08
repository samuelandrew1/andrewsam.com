import {
  Button,
  Flex,
  HStack,
  Heading,
  Icon,
  ListItem,
  Show,
  Spacer,
  Text,
  UnorderedList,

} from "@chakra-ui/react";
import { useState } from "react";
import { IconType } from "react-icons";
import { FcNews } from "react-icons/fc";
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
      <Heading fontSize={"2xl"} color={"white"} marginLeft={"50px"}>

        Andrew samuel Tamaraprebi
      </Heading>
        </Link>
      </HStack>
      {/* </Show> */}
      <Spacer />
      <Link to='blog'>
        <Button leftIcon={<FcNews />}>Blog</Button>
      </Link>
      <UnorderedList>
        <Flex flexDirection={{ base: "column", lg: "row" }}>
          {navbar.map((nav, index) => (
            <HashLink to={nav.hashLink} smooth>
            <ListItem
              key={nav.id}
              style={{ listStyle: "none" }}
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
                  <Text
                    fontSize={"lg"}
                    fontWeight={"bold"}
                    bg={"blackAlpha.100"}
                  >
                    {nav.text}
                  </Text>
                </Flex>{" "}
            </ListItem>
            </HashLink>
          ))}
        </Flex>
      </UnorderedList>
    </HStack>
  );
};

export default NavBar;
