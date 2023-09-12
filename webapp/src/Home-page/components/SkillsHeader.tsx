import { Box,Text, Center, Heading } from "@chakra-ui/react"

interface props {
    text: string
    heading: string
}
const SkillsHeader = ({ text, heading }: props) => {
    return (
        <Box>
            
        <Center p={5}>

            <Heading>{heading}</Heading>
            </Center>
            <Text>{text }</Text>
        </Box>
    )
}
export default SkillsHeader