import { Button, HStack, Img, List, ListItem, } from "@chakra-ui/react"
import useGenres from "./Hooks/useGenres"
import { genres_props } from "./Hooks/UseData"
interface props {
    onSelectedGengres: (gen: genres_props) => void
    selectedGenre: genres_props | null
}
const Generes = ({ onSelectedGengres, selectedGenre }: props) => {
    const { data } = useGenres()
    return (
        <List>
            {data.map((list) =>
                <ListItem key={list.id}>
                    <HStack>
                        <Img src={list.image_background} boxSize={"32px"} m={2} />
                        <Button fontWeight={list.id == selectedGenre?.id ? "bold" : "normal"} onClick={() => onSelectedGengres(list)} variant={"link"} key={list.name} fontSize={"lg"}>{list.name}</Button>
                    </HStack>
                </ListItem>
            )}
        </List>
    )
}
export default Generes