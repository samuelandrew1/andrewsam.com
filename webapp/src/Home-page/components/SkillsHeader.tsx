import { Box,Text, Center, Heading } from "@chakra-ui/react"
import { Animator, FadeIn, ScrollPage,  batch } from "react-scroll-motion"

interface props {
    text: string
    heading?: string
}
 export const ZoomInScrollOut = batch(
    // FadeOut(),
    FadeIn(),
    // ZoomIn(),
    // MoveOut(0, -1000)
);

const SkillsHeader = ({ text, heading }: props) => {
    return (
        <ScrollPage >
            <Box zIndex={100}>


                <Animator animation={ZoomInScrollOut}>
        <Center p={5}>

            <Heading  p={5}mt={10} bg='#2f304c' color='#e3d8d8' borderRadius={20}>{heading}</Heading>
            </Center>
            <Text p={10}  fontSize='4xl'>{text }</Text>
                </Animator>
            </Box>
        </ScrollPage>
    )
}
export default SkillsHeader