import { Box, Center, Flex, Heading, Image, Show, Text, } from "@chakra-ui/react"
import picture from '../../assets/Images/pic.jpg'
import MySkills from "./My-Skills"
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
import ScrolText from "./Scroll-Text";


const ZoomInScrollOut = batch(
  FadeIn(),
  ZoomIn(),
  MoveOut(0, 500),
  MoveIn(0, 500)

);
const heading = "My skills and experience"
const skillsText = " Welcome to my skills page, where I showcase my frontend engineering expertise. I'm passionate about creating dynamic and user-friendly web experiences. Scroll below, you'll find a list of my skills and technologies I've mastered over the years."
const missionText = 'Mission'
const missionSubtext = ' committed to delivering exceptional frontend engineering solutions that redefine user experiences To create  websites that are visually stunning and easy to navigate in all aspects of development, from basic syntax to complex layouts and responsive design.'
const visionsHeading = 'Vision'
const visonSubText = ` to lead the way in creating web and mobile interfaces that envisioned a  to user-centric design, to  bridge the gap between cutting-edge technology and intuitive design.`
const HomePage = () => (
  <>
    <Show above="lg">

      <Box>
        <Center>
          <Heading fontSize={50} mt={100}>Frontend Engineer</Heading>
        </Center>

      </Box>
    </Show>
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

                      <Heading > Frontend Engineer</Heading>
                    </Center>
                    <Text fontSize='lg'>
                      Hi! My name is Andrew Samuel Tamaraprebi, am passionate about website development with a penchant for turning ideas into captivating experiences. From designing elegant interfaces to crafting clean code, I thrive on bringing visions to life.
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
                Hi! My name is Andrew Samuel Tamaraprebi, am  passionate about website developement with a penchant for turning ideas into captivating experiences. From designing elegant interfaces to crafting clean code, I thrive on bringing visions to life.
              </Text>
              </Show>
            </Flex>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator animation={batch(MoveIn(0,-100))}>
            <ScrolText heading={missionText} content={missionSubtext} /> 
            <ScrolText heading={ visionsHeading} content={visonSubText} /> 
          </Animator>
        </ScrollPage>
        
        <ScrollPage>
          <SkillsHeader text={skillsText} heading={heading} />
        </ScrollPage>

        <MySkills />
      </ScrollContainer>
    </Box>
  </>

)
export default HomePage

