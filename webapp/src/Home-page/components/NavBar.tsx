import {
  Button,
  HStack,
  List,
  ListItem,
  Spacer,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { ReactElement, useState, useEffect } from "react";
import { FcHome } from "react-icons/fc";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { HiOutlineMenu } from 'react-icons/hi';

export interface nav {
  tooltip: string;
  icon: ReactElement<any, any>;
  id: number;
  text: string;
  link: string;
}

export interface props {
  navbar: nav[];
  onClick?: () => void;
}

const NavBar = ({ navbar }: props) => {
  const [active, setActive] = useState(-1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const handleNavigation = (index: number, link: string) => {
    setActive(index);
    if (link.startsWith('#')) {
      if (location.pathname !== '/') {
        navigate('/' + link);
      } else {
        const element = document.getElementById(link.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(link);
    }
  };

  return (
    <HStack>
      <Link to="/">
        <Button
          leftIcon={<FcHome />}
          fontSize={"2xl"}
          variant="link"
          color={"white"}
          marginLeft={"50px"}
        >
          Andrew S.T
        </Button>
      </Link>
      <Spacer />
      {isMobile ? (
        <>
          <Button variant={'unstyled'}
            aria-label="Open Menu"
            as={HiOutlineMenu}
            onClick={onOpen}
            color={"white"}
            mr={"50px"}
          />
          <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Navigation</DrawerHeader>
              <DrawerBody>
                <List>
                  {navbar.map((nav, index) => (
                    <ListItem
                      key={nav.id}
                      p={"10px"}
                      onClick={() => {
                        handleNavigation(index, nav.link);
                        onClose(); // Close the drawer on link click
                      }}
                      color={active === index ? "messenger.500" : "black"}
                      borderRadius={"10px"}
                      cursor={"pointer"}
                      _hover={{
                        opacity: 0.8,
                      }}
                      _active={{ color: "red" }}
                      mb={"10px"}
                    >
                      <HStack>
                        <Button
                          leftIcon={nav.icon}
                          py={4}
                          colorScheme={active === index ? "messenger" : "black"}
                          variant="ghost"
                        >
                          {nav.text}
                        </Button>
                      </HStack>
                    </ListItem>
                  ))}
                </List>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <HStack>
          {navbar.map((nav, index) => (
            <ListItem
              key={nav.id}
              p={"10px"}
              onClick={() => handleNavigation(index, nav.link)}
              color={"white"}
              borderRadius={"10px"}
              cursor={"pointer"}
              _hover={{
                opacity: 0.8,
              }}
              _active={{ color: "red" }}
              mr={"50px"}
            >
              <VStack>
                <Button
                  leftIcon={nav.icon}
                  py={4}
                  colorScheme={active === index ? "messenger" : "black"}
                  variant="ghost"
                >
                  {nav.text}
                </Button>
              </VStack>
            </ListItem>
          ))}
        </HStack>
      )}
    </HStack>
  );
};

export default NavBar;
