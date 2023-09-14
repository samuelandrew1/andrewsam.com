import { Card, CardBody, CardFooter, CardHeader, HStack, Heading, Image, SimpleGrid, Text } from "@chakra-ui/react"
import { newsProps } from "./Blog-Object"

interface props {
    cardContents: newsProps[]
}
const BlogCard = ({ cardContents }: props) => {
    return (
        <>
            <SimpleGrid column={2}>

                {cardContents.map(items => <Card key={items.newsHeading} variant={'filled'}>
                    <CardHeader>
                        <Image maxW={300} src={items.newsImage} />
                    </CardHeader>
                    <CardBody>
                        <Heading>{items.newsHeading}</Heading>
                        <Text>   {items.newsSubHeading}</Text>
                    </CardBody>
                    <CardFooter>
                        <HStack>
                            <Text>{items.time}</Text>
                            <Text>{items.newsDate}</Text>
                        </HStack>
                    </CardFooter>

                </Card>)}
            </SimpleGrid>

        </>


    )
}
export default BlogCard