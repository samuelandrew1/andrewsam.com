import { Button, HStack, Img, List, ListItem, } from "@chakra-ui/react"
import useGenres from "./Hooks/useGenres"

const Generes = () => {
    const { data } = useGenres()
    return (
        <List>
            {data.map((list) =>
                <ListItem key={list.id}>
                    <HStack>
                        <Img src={list.image_background} boxSize={"32px"} m={2} />
                        <Button variant={"link"} key={list.name} fontSize={"lg"}>{list.name}</Button>
                    </HStack>
                </ListItem>
            )}
        </List>
    )
}
export default Generes