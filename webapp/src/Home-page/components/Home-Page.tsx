import { Box, Center, Flex, Grid, GridItem, Heading, Image, Text, baseTheme, } from "@chakra-ui/react"
import picture from '../../assets/Images/pic.jpg'
import MySkills from "./Skill-Object"
import { motion } from 'framer-motion'
import ProjectHome from "../Project-Page/Project-Home"
import projecObject from "../Project-Page/Project-Object"
interface props {
  headText: string
  subText: string
}

const HomePage = ({ headText, subText }: props) => {
  return (
    <>
      <Box
        id="home"
        // bg='#b9bcd4'
        maxW={{ lg: "80%", base: "90%" }}
        m='auto'
    >
      <Box >
          <Box>

          <Center>
              <Heading mt={10} p={3}>{headText}</Heading>
            </Center>
            <Text fontSize='2xl'>{subText}</Text>
          </Box>

          <Grid templateAreas={{ base: `"img" "text"`, lg: `"img text"` }}>
          <GridItem area={"img"}>

            <Image src={picture}
              m={"auto"}
              w={{ base: "90%", lg: "100%" }}
              p={5}
              borderRadius={"3xl"}
              overflow={"hidden"} />

          </GridItem>

          <GridItem area={"text"}>
              <Center >
              <Text p={{ lg: 10, sm: 2 }}
                fontSize={{ lg: "4xl", base: "3xl" }}
                w={"90%"}
                lineHeight={"55px"}
                  as={motion.div}
                animate={{
                  scale: 1,
                  x: [0, 900, 0]
                }}
                initial={{ x: 0 }}
                  color='#2f304c'
                  id="about"
              >

            A passionate front-end developer with a penchant for turning ideas into captivating experiences. From designing elegant interfaces to crafting clean code, I thrive on bringing visions to life.
          </Text>
        </Center>
          </GridItem>
        </Grid>
      </Box>
        <MySkills />
        <Box>
          <ProjectHome projectItems={projecObject} />
        </Box>

      </Box>
    </>
     
  )
}
export default HomePage

