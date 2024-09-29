import { Box } from "@chakra-ui/react"
import useNews from "./api-client"
import BlogCard from "./BlogCard"




export const BlogHome = () => {
  const { data } = useNews()
  return (
    <Box mt={50}>
      {data.map((news: any) =>
        <BlogCard cardContents={news} key={news} />
      )}
    </Box>
  )
}
export default BlogHome