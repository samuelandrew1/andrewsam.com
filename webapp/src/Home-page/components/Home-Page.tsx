import { Box, Center, Flex, Heading, Image, Show, Text, } from "@chakra-ui/react"
import picture from '../../assets/Images/pic.jpg'
import MySkills from "./Skill-Object"
import { motion } from 'framer-motion'
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  FadeIn,
  MoveOut,
  MoveIn,
  FadeOut,
  ZoomIn,
} from "react-scroll-motion";
import SkillsHeader from "./SkillsHeader";

interface props {
  headText: string
  subText: string
}
const ZoomInScrollOut = batch(
  FadeIn(),
  ZoomIn(),
  MoveOut(0, 1000),
  MoveIn(0, 1000)

);
const heading = "My skills and experience"
const text = " Welcome to my skills page, where I showcase my frontend engineering expertise. I'm passionate about creating dynamic and user-friendly web experiences. Scroll below, you'll find a list of my skills and technologies I've mastered over the years."

const HomePage = ({ headText, subText }: props) => (
  <>
    <Box
      id="home"
// bg='#b9bcd4'
      maxW={{ lg: "80%", base: "100%", sm: '90%' }}
      m='auto'
      zIndex={10}
    >
      <ScrollContainer>


        <ScrollPage>
          <Animator animation={batch(MoveIn(1000, 0), FadeOut(1000, 0), FadeIn(1000, 0), MoveOut(0, 0))}>
            <Flex direction={{ base: 'column', lg: 'row' }} m={5} borderRadius={50} mt={50}>

              <ScrollPage>
                <Animator animation={ZoomInScrollOut}>
                  {/* <Box> */}
                  <Show below="lg">

                    <Center m={2}>

                      <Heading > frontend Enginer</Heading>
                    </Center>
                    <Text fontSize='lg'>
                      Hi! My name is Andrew Samuel Tamaraprebi, I am a passionate front-end developer with a penchant for turning ideas into captivating experiences. From designing elegant interfaces to crafting clean code, I thrive on bringing visions to life.

                    </Text>
                  </Show>
                  <Image src={picture}
                    m={"auto"}
                    w={{ base: "90%", }}
                    p={5}
                    borderRadius={{lg:'50px', base:"200px"}}
                    overflow={"hidden"} />
                  {/* </Box> */}
                </Animator>
              </ScrollPage>
              <Show above="lg">

              <Text p={{ lg: 10, sm: 2, base: 3 }}
                  fontSize={{ lg: "4xl", base: "lg" }}
                w={"90%"}
                m='auto'
                mt={0}
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
              </Show>
            </Flex>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={ZoomInScrollOut}
          >
            <Center>
              <Heading mt={5} >{headText}</Heading>
            </Center>
            <Text fontSize='4xl' p={5}>{subText}</Text>
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <SkillsHeader text={text} heading={heading} />
        </ScrollPage>
      </ScrollContainer>
      <MySkills />
    </Box>
  </>

)
export default HomePage

