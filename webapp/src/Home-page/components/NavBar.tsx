import {
  HStack,
  Button,
  Icon,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  List,
  ListItem,
  Spacer,

  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { FcHome } from "react-icons/fc";
import { HiOutlineMenu } from "react-icons/hi";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

interface NavItem {
  id: number;
  text: string;
  link: string;
  icon: JSX.Element;
}

interface NavBarProps {
  navbar: NavItem[];
}

const NavBar = ({ navbar }: NavBarProps) => {
  const [active, setActive] = useState(-1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  const handleNavigation = (index: number, link: string) => {
    setActive(index);
    if (link.startsWith("#")) {
      if (location.pathname !== "/") {
        navigate("/" + link);
      } else {
        const element = document.getElementById(link.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      navigate(link);
    }
  };

  return (
    <HStack p={"10px"} w="100%" bg="#2f304c" boxShadow="sm">
      <Link to="/">
        <Button
          leftIcon={<FcHome />}
          fontSize={"2xl"}
          variant="link"
          color={"white"}
          fontWeight="bold"
          _hover={{ textDecoration: "none", color: "#f2a365" }}
          marginLeft={"20px"}
        >
          Concept Technologies
        </Button>
      </Link>
      <Spacer />
      {isMobile ? (
        <>
          <Icon
            as={HiOutlineMenu}
            onClick={onOpen}
            color="white"
            boxSize={"40px"}
            cursor="pointer"
            _hover={{ color: "#f2a365" }}
            mr="20px"
            transition="color 0.3s ease"
          />
          <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="xs">
            <DrawerOverlay />
            <DrawerContent bg="#2f304c" color="white">
              <DrawerCloseButton color="white" />
              <DrawerHeader borderBottomWidth="1px" borderColor="#f2a365">
                <Button
                  leftIcon={<FcHome />}
                  fontSize={"xl"}
                  variant="link"
                  color={"white"}
                  fontWeight="bold"
                  _hover={{ textDecoration: "none", color: "#f2a365" }}
                >
                  Andrew S.T
                </Button>
              </DrawerHeader>
              <DrawerBody>
                <List spacing={4}>
                  {navbar.map((nav, index) => (
                    <ListItem
                      key={nav.id}
                      p={"10px"}
                      onClick={() => {
                        handleNavigation(index, nav.link);
                        onClose(); // Close the drawer on link click
                      }}
                      bg={active === index ? "#3b5998" : "transparent"}
                      borderRadius={"10px"}
                      cursor={"pointer"}
                      transition="background 0.3s ease"
                      _hover={{
                        bg: "#f2a365",
                      }}
                    >
                      <HStack>
                        <Button
                          leftIcon={nav.icon}
                          py={2}
                          colorScheme={active === index ? "messenger" : "whiteAlpha"}
                          variant="ghost"
                          color="white"
                          fontWeight="medium"
                          _hover={{ color: "white" }}
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
        <HStack spacing={8} mr="20px">
          {navbar.map((nav, index) => (
            <Button
              key={nav.id}
              leftIcon={nav.icon}
              py={4}
              colorScheme={active === index ? "messenger" : "whiteAlpha"}
              variant="ghost"
              onClick={() => handleNavigation(index, nav.link)}
              color="white"
              fontWeight="medium"
              _hover={{
                color: "#f2a365",
              }}
              transition="color 0.3s ease"
            >
              {nav.text}
            </Button>
          ))}
        </HStack>
      )}
    </HStack>
  );
};

export default NavBar;
