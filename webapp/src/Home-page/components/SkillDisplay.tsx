import { Box, Text, Image } from "@chakra-ui/react"
import { getProps } from "./Skill-Object"
import pic from '../../assets/Images/pageBack.jpg'
interface props {
    getSkills: getProps
}
const SkillDisplay = ({ getSkills }: props) => {
    return (
        <>

            <Box backgroundImage={pic}>
            <Image src={getSkills.bgImage} />
                <Text bg={"red.100"}>{getSkills.pgLanguage}</Text>
        </Box>
        </>
    )
}
export default SkillDisplay