import {
  Button,
  Flex,
  HStack,
  List,
  ListItem,
  Spacer,
  

} from "@chakra-ui/react";
import { ReactElement, useState } from "react";
import { FcHome } from "react-icons/fc";
import { Link } from "react-router-dom";
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

const NavBar = ({ navbar, }: props) => {
  const [active, setActive] = useState(-1);
  return (
    <HStack>


        <Link to='/'>
        <Button leftIcon={<FcHome />} fontSize={"2xl"} variant='link' color={"white"} marginLeft={"50px"}>
        Andrew samuel Tamaraprebi
          </Button>
        </Link>


      <Spacer />
      
      {navbar.map((nav, index) => (
            
            
          <List>
          
              <Link to={nav.link}>
            <ListItem
                key={nav.id}
                p={"10px"}
                onClick={() => {
                  setActive(index);
                  // onClick();
                }}
                color={"white"}
                borderRadius={"10px"}
                cursor={"pointer"}
                _hover={{
                  opacity: 0.8,
                }}
                _active={{ color: "red" }}
                mr={"50px"}
                >

                  <HStack key={"FLEX BOX"}>                
                    <Button leftIcon={nav.icon}
                      py={4}
                      colorScheme={active === index ? 'messenger' : "black"}
                      bg={active === index ? 'white' : ""}
                      variant='ghost'>
                    {nav.text}
                    </Button>
                </HStack>{" "}
            </ListItem>
            </Link>
         </List>
          
            ))}
              
          
      
    </HStack>
  );
};

export default NavBar;
