import { Box, Center, Flex, Grid, GridItem, Heading, Image, Text, } from "@chakra-ui/react"
import picture from '../../assets/Images/pic.jpg'
import MySkills from "./Skill-Object"
import { motion } from 'framer-motion'
import bgpicture from '../../assets/Images/pageBack.jpg'
const HomePage = () => {
  return (
    <Box
      bg={"black"}
    >
      <Box >
        <Flex backgroundImage={bgpicture} height={300} bgSize={"cover"} bgPosition={"center"} bgRepeat={"no-repeat"} justifyContent={"center"} p={2}>
          <Center>

            <Heading color={"whiteAlpha.800"}>junior software engineer</Heading>
          </Center>
        </Flex>
        <Grid templateAreas={{ base: `"img" "text"`, lg: `"img text"` }} bgImage={bgpicture}>
          <GridItem area={"img"}>

            <Image src={picture}
              m={"auto"}
              w={{ base: "90%", lg: "100%" }}
              p={5}
              borderRadius={"3xl"}
              overflow={"hidden"} />

          </GridItem>

          <GridItem area={"text"}>
        <Center>
              <Text p={{ lg: 10, sm: 2 }}
                fontSize={{ lg: "5xl", base: "3xl" }}
                w={"90%"}
                lineHeight={"55px"}
                as={motion.div}
                whileHover={{ scale: 1.1 }}
                animate={{
                  scale: 1,
                  x: [0, 900, 0]
                }}
                initial={{ x: 0 }}
                color={"white"}
              >

            A passionate front-end developer with a penchant for turning ideas into captivating experiences. From designing elegant interfaces to crafting clean code, I thrive on bringing visions to life.
          </Text>
        </Center>
          </GridItem>
        </Grid>
      </Box>
      <MySkills />
    </Box>
     
  )
}
export default HomePage

