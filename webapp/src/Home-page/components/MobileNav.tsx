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
  Spacer,
  HStack,
  Show,
  Flex,
  ListItem,
  List,
} from "@chakra-ui/react";
import { HiOutlineMenu } from 'react-icons/hi'
import { Link } from "react-router-dom";
import { props } from "./NavBar";
import { useState } from "react";
import { IconType } from "react-icons";
import { FcHome } from "react-icons/fc";

const ikon: IconType = HiOutlineMenu


function MobileNav({ navbar }: props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [active, setActive] = useState(-1);
  return (
    <HStack p={"10px"}>
      <Link to='/'>
        <Button leftIcon={<FcHome />} variant='link' fontSize={20} marginLeft={20}>Andrew samuel T.</Button>
      </Link>
      <Spacer />
      <Icon as={ikon} color="white"
        onClick={onOpen}
        boxSize={"50px"} />

      
      <Drawer
        isOpen={isOpen} placement="right" onClose={onClose} >
        <DrawerOverlay color={"white"} />
        <DrawerContent onClick={onClose} bg='#2f304c'>
          <DrawerCloseButton bg='#e3d8d8' />
          <DrawerHeader>
            <Link to='/'>
              <Button bg='#e3d8d8' color='#2f304c' leftIcon={<FcHome />}>Andrew samuel</Button>
            </Link>
          </DrawerHeader>
          <DrawerBody>
            {navbar.map((nav, index) => {
              return (
                <List
                  key={nav.id}
                >
                  <Link to={nav.link}>
                    <ListItem
                      style={{ listStyle: "none" }}
                      p={"10px"}
                      bg={active === index ? "#3b5998" : ""}
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
                    >
                      <Flex key={"FLEX BOX"} alignContent={"center"}>
                        <Show above="lg">
                          <Spacer />
                        </Show>
                        <Button
                          leftIcon={nav.icon}
                          fontSize={"lg"}
                          fontWeight={"bold"}
                          color={active === index ? 'whiteAlpha.800' : "#e3d8d8"}
                          bg=''
                          _hover={{ bg: '' }}
                        >
                          {nav.text}
                        </Button>
                      </Flex>{" "}
                    </ListItem>
                  </Link>
                </List>
              );
            })}
          </DrawerBody>
          <DrawerFooter>
            <Button mr={3}bg='#e3d8d8' onClick={onClose} color='#2f304c'>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

    
    </HStack>
  );
}
export default MobileNav;
