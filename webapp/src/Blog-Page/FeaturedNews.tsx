import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import { Navigation, Pagination } from 'swiper/modules';
import { Box, Image, Badge, Heading, Text } from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const FeaturedNews = () => {
    return (
        <Box className="container-fluid pt-5 mb-3">
            <Box className="container">
            <div className="section-title">
                <h4 className="m-0 text-uppercase font-weight-bold">Featured News</h4>
            </div>
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ clickable: true }}
                    slidesPerView={3} // 3 cards per view
                    spaceBetween={30} // Space between slides
                    breakpoints={{
                        320: { slidesPerView: 1 }, // 1 card on base screen (mobile)
                        768: { slidesPerView: 2 }, // 2 cards on medium devices
                        1024: { slidesPerView: 3 }, // 3 cards on large devices
                        1440: { slidesPerView: 4 }, // 4 cards on extra-large devices
                    }}
                >
                    {/* Slide 1 */}
                    <SwiperSlide>
                        <Box
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                            boxShadow="lg"
                            transition="transform 0.2s"
                            _hover={{ transform: 'scale(1.05)' }}
                        >
                            <Image
                                src="./src/assets/blog/img/news-700x435-3.jpg"
                                alt="News 1"
                                objectFit="cover"
                                height="200px"
                                width="100%"
                            />
                            <Box p="6">
                                <Box display="flex" alignItems="baseline">
                                    <Badge borderRadius="full" px="2" colorScheme="blue">
                                        Business
                                    </Badge>
                                    <Text ml={2} color="gray.500" fontSize="sm">
                                        Jan 01, 2045
                                    </Text>
                                </Box>
                                <Heading as="h5" size="sm" mt="2">
                                    Lorem ipsum dolor sit amet elit...
                                </Heading>
                            </Box>
                        </Box>
                    </SwiperSlide>
                    {/* Slide 2 */}
                    <SwiperSlide>
                        <Box
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                            boxShadow="lg"
                            transition="transform 0.2s"
                            _hover={{ transform: 'scale(1.05)' }}
                        >
                            <Image
                                src="./src/assets/blog/img/news-700x435-4.jpg"
                                alt="News 2"
                                objectFit="cover"
                                height="200px"
                                width="100%"
                            />
                            <Box p="6">
                                <Box display="flex" alignItems="baseline">
                                    <Badge borderRadius="full" px="2" colorScheme="green">
                                        Business
                                    </Badge>
                                    <Text ml={2} color="gray.500" fontSize="sm">
                                        Jan 01, 2045
                                    </Text>
                                </Box>
                                <Heading as="h5" size="sm" mt="2">
                                    Lorem ipsum dolor sit amet elit...
                                </Heading>
                            </Box>
                        </Box>
                    </SwiperSlide>
                    {/* Slide 3 */}
                    <SwiperSlide>
                        <Box
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                            boxShadow="lg"
                            transition="transform 0.2s"
                            _hover={{ transform: 'scale(1.05)' }}
                        >
                            <Image
                                src="./src/assets/blog/img/news-700x435-5.jpg"
                                alt="News 3"
                                objectFit="cover"
                                height="200px"
                                width="100%"
                            />
                            <Box p="6">
                                <Box display="flex" alignItems="baseline">
                                    <Badge borderRadius="full" px="2" colorScheme="red">
                                        Business
                                    </Badge>
                                    <Text ml={2} color="gray.500" fontSize="sm">
                                        Jan 01, 2045
                                    </Text>
                                </Box>
                                <Heading as="h5" size="sm" mt="2">
                                    Lorem ipsum dolor sit amet elit...
                                </Heading>
                            </Box>
                        </Box>
                    </SwiperSlide>
                </Swiper>

                {/* Custom Navigation Arrows */}
                <Box className="swiper-button-prev" position="absolute" top="50%" left="10px" zIndex="10">
                    <ChevronLeftIcon w={10} h={10} color="blue.600" _hover={{ color: 'blue.800' }} />
                </Box>
                <Box className="swiper-button-next" position="absolute" top="50%" right="10px" zIndex="10">
                    <ChevronRightIcon w={10} h={10} color="blue.600" _hover={{ color: 'blue.800' }} />
                </Box>
            </Box>
        </Box>
    );
};

export default FeaturedNews;
