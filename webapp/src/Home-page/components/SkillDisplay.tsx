import { Box, Text, Image } from "@chakra-ui/react"
import { getProps } from "./Skill-Object"

interface props {
    getSkills: getProps
}
const SkillDisplay = ({ getSkills }: props) => {
    return (
        <Box>
            <Image src={getSkills.bgImage} />
            <Text>{getSkills.pgLanguage}</Text>
        </Box>
    )
}
export default SkillDisplay