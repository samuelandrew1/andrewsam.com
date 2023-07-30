import jspic from '../../assets/Images/js.png'
import htmlLogo from '../../assets/Images/html.png'
import csslogo from '../../assets/Images/csslogo.png'
import { Box, Center, Image, SimpleGrid, Text } from '@chakra-ui/react'



export interface getProps {
    pgLanguage: string
    bgImage: string
    text: string
    id: number
    containerId: number
    imageDescription: string
}

const MySkills
    = () => {
        const Object: getProps[] = [
            { imageDescription: "html loge", pgLanguage: "HTML", bgImage: htmlLogo, text: "html", id: 1, containerId: 1 },
            { imageDescription: "css logo", pgLanguage: "CSS", bgImage: csslogo, text: "html", id: 2, containerId: 2 },
            { imageDescription: "javascript logo", pgLanguage: "JavaScript", bgImage: jspic, text: "javaSript", id: 3, containerId: 3 },
        ]

        return (
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }}
                spacing={2}
                padding={"25px"}>

                {Object.map(items =>
                    <Box key={items.containerId}
                        rounded='md'
                        border={"4px solid brown"}
                        bg={"white"} m={5}
                        boxShadow='outline'
                        justifyItems={"center"}
                        p={5}>

                        <Center>
                            <Image key={items.id}
                                src={items.bgImage}
                                w={"30px"} h={"40px"}
                                objectFit={"cover"} m={5}
                                alt={items.imageDescription}
                            />
                        </Center>
                        <Center>
                            <Text key={items.text}
                                fontSize={30}
                            >
                                {items.pgLanguage}
                            </Text>
                        </Center>
                    </Box>
                )}

            </SimpleGrid>
        )
    }
export default MySkills
