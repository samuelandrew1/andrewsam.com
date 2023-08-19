import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { MdOutlineArrowDropDownCircle } from 'react-icons/md'
import usePlatform, { platform } from "./Hooks/usePlatform"

interface props {
    onselectedPlatform: (para: platform) => void
}
const PlatformSelector = ({ onselectedPlatform }: props) => {
    const { data } = usePlatform()
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<MdOutlineArrowDropDownCircle />}>
                platform
            </MenuButton>
            <MenuList >
                {data.map(platform => <MenuItem key={platform.id} onClick={() => onselectedPlatform(platform)}>{platform.name}</MenuItem>)}

            </MenuList>
        </Menu>
    )
}
export default PlatformSelector