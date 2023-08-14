import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Icon,
  Heading,
  Spacer,
  HStack,
  Show,
  UnorderedList,
  Flex,
  ListItem,
  Text,


} from "@chakra-ui/react";
import { HiOutlineMenu } from 'react-icons/hi'
import { Link } from "react-router-dom";
import pic from "../../assets/Images/pageBack.jpg";
import { props } from "./NavBar";
import { useState } from "react";
import { IconType } from "react-icons";

const ikon: IconType = HiOutlineMenu

function MobileNav({ navbar }: props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [active, setActive] = useState(-1);

  return (
    <HStack p={"10px"} bgImage={pic}>
      <Heading fontSize={20} color={"white"} marginLeft={20}>Andrew samuel T.</Heading>

      <Spacer />
      <Icon as={ikon} color="white" onClick={onOpen} boxSize={"50px"} />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay color={"white"} />
        <DrawerContent onClick={onClose} bgImage={pic}>
          <DrawerCloseButton />
          <DrawerHeader>
            <Heading color={"white"}>Andrew samuel</Heading>
          </DrawerHeader>
          <DrawerBody>
            <UnorderedList>
              {navbar.map((nav, index) => (
                <ListItem
                  key={nav.id}
                  style={{ listStyle: "none" }}
                  p={"10px"}
                  bg={active === index ? "blue" : ""}
                  onClick={() => {
                    setActive(index);
                  }}
                  m={"50px"}
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
            </UnorderedList>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose} color={"white"}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </HStack>
  );
}
export default MobileNav;
