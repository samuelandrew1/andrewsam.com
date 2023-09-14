import { Box, Heading } from "@chakra-ui/react"
import NewsGrid from "./NewsGrid"
import BlogObject from "./Blog-Object"
import BlogCard from "./Blog-Card"


export const BlogHome = () => {
  return (
    <Box mt={50}>
      <Heading>Andrewsam Blog</Heading>
      <BlogCard cardContents={BlogObject}/>
      
    </Box>
  )
}
export default BlogHome