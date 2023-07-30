import {
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  ListItem,
  Show,
  Spacer,
  Text,
  UnorderedList,

} from "@chakra-ui/react";
import { useState } from "react";
import { IconType } from "react-icons";
import { Link } from "react-router-dom";
import logo from '../../assets/mylogo.png'
export interface nav {
  tooltip: string;
  icon: IconType;
  id: number;
  text: string;
  link: string;
}

export interface props {
  navbar: nav[];
  onClick: () => void;
}

const NavBar = ({ navbar, onClick }: props) => {
  const [active, setActive] = useState(-1);
  return (
    <HStack>
      {/* <Show above="lg"> */}
      <HStack>
        <Image src={logo} w={"100px"} marginLeft={"20px"} borderRadius={5} />
      <Heading fontSize={"2xl"} color={"white"} marginLeft={"50px"}>

        Andrew samuel Tamaraprebi
      </Heading>
      </HStack>
      {/* </Show> */}
      <Spacer />
      <UnorderedList>
        <Flex flexDirection={{ base: "column", lg: "row" }}>
          {navbar.map((nav, index) => (
            <ListItem
              key={nav.id}
              style={{ listStyle: "none" }}
              p={"10px"}
              bg={active === index ? "blue" : ""}
              onClick={() => {
                setActive(index);
                onClick();
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
              <Link to={nav.link}>
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
              </Link>
            </ListItem>
          ))}
        </Flex>
      </UnorderedList>
    </HStack>
  );
};

export default NavBar;
