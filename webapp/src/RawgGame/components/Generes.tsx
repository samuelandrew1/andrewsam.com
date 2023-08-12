import { ListItem, UnorderedList } from "@chakra-ui/react"
import useGenres from "./Hooks/useGenres"

const Generes = () => {
    const { genres } = useGenres()
    return (
        <UnorderedList>
            {genres.map(list => <ListItem key={list.id}>{list.name}</ListItem>)}
        </UnorderedList>
    )
}
export default Generes