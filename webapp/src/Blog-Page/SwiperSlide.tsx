import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import {
  Box,
  Heading,
  Text,
  Grid,
  Card,
  CardBody,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import "swiper/css";
import "swiper/css/pagination";
import "./BlogSlide.css";
import logo from '../assets/Images/logo.jpg'
const BlogSlide = () => {
  const blogPosts = [
    {
      title: "Post 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: logo, // Updated image size for background
    },
    {
      title: "Post 2",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/800x400",
    },
    {
      title: "Post 3",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      image: "https://via.placeholder.com/800x400",
    },

  ];

  return (
    <Box
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      gap={8}
      p={6}
      maxW="1200px"
      mx="auto"
    >
      {/* Left Swiper */}
      <Box
        flex={{ base: "1", md: "2" }}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow="lg"
        rounded="lg"
        overflow="hidden"
        p={4}
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          modules={[Pagination, Autoplay]}
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index}>
              <Box
                height="400px"
                backgroundImage={`url(${post.image})`}
                backgroundPosition="center"
                backgroundSize="cover"
                display="flex"
                justifyContent="center"
                alignItems="flex-end" // Moves the text to the bottom
                color="white"
                textAlign="center"
                position="relative"
                _before={{
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  bg: "rgba(0, 0, 0, 0.4)", // Dark overlay
                  zIndex: 1,
                  backdropFilter: "blur(5px)", // Adds blur effect
                }}
              >
                <Box zIndex={2} p={4}>
                  <Heading fontSize="3xl">{post.title}</Heading>
                  <Text fontSize="lg" mt={2}>
                    {post.description}
                  </Text>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {/* Right Cards (Top Stories in Row) */}
      <Grid
        templateColumns={{ base: "1fr", md: "1fr" }}
        gap={6}
        flex="1"
      >
        {blogPosts.map((post, index) => (
          <Card
            key={index}
            direction="row"
            alignItems="center"
            bg={useColorModeValue("white", "gray.800")}
            boxShadow="md"
            _hover={{ boxShadow: "xl", transform: "scale(1.02)" }}
            transition="all 0.3s ease"
            rounded="lg"
            overflow="hidden"
          >
            <Image
              src={post.image}
              alt={post.title}
              boxSize="150px"
              objectFit="cover"
            />
            <CardBody p={4}>
              <Heading fontSize="lg" mb={2}>
                {post.title}
              </Heading>
              <Text fontSize="sm" color={useColorModeValue("gray.600", "gray.400")}>
                {post.description.slice(0, 50)}...
              </Text>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogSlide;
