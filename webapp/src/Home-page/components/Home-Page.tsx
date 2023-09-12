import { Box, Center, Grid, GridItem, Heading, Image, Text, } from "@chakra-ui/react"
import picture from '../../assets/Images/pic.jpg'
import MySkills from "./Skill-Object"
import { motion } from 'framer-motion'
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
          <Box bg='#c3c4c6' borderRadius={20} m={'auto'} mt={20} p={5} w={{base:'90%'}}>

          <Center>
              <Heading mt={5} p={3}>{headText}</Heading>
            </Center>
            <Center>

            <Text fontSize='2xl'>{subText}</Text>
            </Center>
          </Box>

          <Grid templateAreas={{ base: `"img" "text"`, lg: `"img text"` }}  bg='#9090a1'  m={5} borderRadius={20}>
          <GridItem area={"img"}>

            <Image src={picture}
              m={"auto"}
              w={{ base: "90%", lg: "100%" }}
              p={5}
              borderRadius={'50px'}
              overflow={"hidden"} />

          </GridItem>

          <GridItem area={"text"}  borderRadius={20}>
              <Center >
              <Text p={{ lg: 10, sm: 2 }}
                fontSize={{ lg: "4xl", base: "2xl" }}
                w={"90%"}
                // lineHeight={2}
                  as={motion.div}
                animate={{
                  scale: 1,
                  x: [0, 900, 0]
                }}
                initial={{ x: 0 }}
                color={'blackAlpha.800'}
                  id="about"
                  
              >

            Hi! My name is Andrew Samuel Tamaraprebi, I am a passionate front-end developer with a penchant for turning ideas into captivating experiences. From designing elegant interfaces to crafting clean code, I thrive on bringing visions to life.
          </Text>
        </Center>
          </GridItem>
        </Grid>
      </Box>
        <MySkills />
      </Box>
    </>
     
  )
}
export default HomePage

