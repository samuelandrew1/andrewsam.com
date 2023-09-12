import { Box } from "@chakra-ui/react"
import Footer from "./Footer"
import HomePage from "./Home-Page"
import NavObject from "./Nav-Object"





const HomeApp = () => {
    const headText = 'Expert Front-End engineer'
    const suntext = 'I specialize in creating React based websites that are visually stunning and easy to navigate. I am an  expert in all aspects of front-End, from basic syntax to complex layouts and responsive design.'
    return (
        <Box
            position={'absolute'}
            top={1}
        bgGradient='linear(to-br, #2f304c, #e3d8d8, #b9bcd4,#68333e )'
        
        >
            <HomePage headText={headText} subText={suntext} />
            <Footer footerItems={NavObject} />


        </Box>
    )
}
export default HomeApp