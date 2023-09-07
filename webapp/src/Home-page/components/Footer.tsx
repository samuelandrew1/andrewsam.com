import { Box, Button, HStack, Icon, List, ListItem } from "@chakra-ui/react"
import { nav } from "./NavBar"
import { BsFacebook } from "react-icons/bs"
import { NavLink } from "react-router-dom"
interface props {
    footerItems: nav[]
}
const Footer = ({ footerItems }: props) => (
    <footer>
        <Box bg={"black"} >

            <Icon as={BsFacebook} boxSize={30} m={5} color={'facebook.300'} />
            <List>
                <HStack m={5}>
                    {footerItems.map(list =>
                        <NavLink to={list.link}>
                            <ListItem p={2} variant={'link'} as={Button}>{list.text}</ListItem>
                        </NavLink>
                    )}
                </HStack>
            </List>
        </Box>
    </footer>
)
export default Footer