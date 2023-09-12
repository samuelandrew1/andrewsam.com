import { Box,Text, Center, Heading } from "@chakra-ui/react"

interface props {
    text: string
    heading: string
}
const SkillsHeader = ({ text, heading }: props) => {
    return (
        <Box >
            
        <Center p={5}>

            <Heading  p={5}mt={10} bg='#2f304c' color='#e3d8d8' borderRadius={20}>{heading}</Heading>
            </Center>
            <Text p={10}  fontSize='2xl'>{text }</Text>
        </Box>
    )
}
export default SkillsHeader