import { Center, Heading } from "@chakra-ui/react"

interface props {
    text: string
}
const SkillsHeader = ({ text }: props) => {
    return (
        <Center p={5}>

            <Heading>{text}</Heading>
        </Center>
    )
}
export default SkillsHeader