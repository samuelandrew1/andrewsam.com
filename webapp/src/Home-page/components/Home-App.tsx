import { Box } from "@chakra-ui/react"
import Footer from "./Footer"
import HomePage from "./Home-Page"
import NavObject from "./Nav-Object"
import SkillsHeader from "./SkillsHeader"





const HomeApp = () => {

    return (
        <Box
            position={'absolute'}
            top={1}
        bgGradient='linear(to-br, #2f304c, #e3d8d8, #b9bcd4,#68333e )'
        
        >
      <SkillsHeader text="WELCOME"/>


            <HomePage  />
            <Footer footerItems={NavObject} />


        </Box>
    )
}
export default HomeApp