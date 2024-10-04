import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "./BlogSlide.css";

import 'swiper/css';
import 'swiper/css/pagination';

const BlogSlide = () => {
  const blogPosts = [
    {
      title: "Post 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Post 2",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Post 3",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      image: "https://via.placeholder.com/300",
    },
    {
      title: "Post 4",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
      image: "https://via.placeholder.com/300",
    },
  ];

  return (
    <div className="blog-slider-container">
      {/* Left Swiper */}
      <div className="left-slider">
        <Swiper
          slidesPerView={1} // Show only one slide at a time
          spaceBetween={0}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop={true}
          modules={[Pagination, Autoplay]}
          className="swiper-container"
        >
          {blogPosts.map((post, index) => (
            <SwiperSlide key={index}>
              <div className="slide-content">
                <img src={post.image} alt={post.title} className="slide-image" />
                <h2 className="slide-title">{post.title}</h2>
                <p className="slide-description">{post.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Cards (Top Stories) */}
      <div className="right-cards">
        {blogPosts.map((post, index) => (
          <div key={index} className="blog-card">
            <img
              src={post.image}
              alt={post.title}
              className="blog-card-image"
            />
            <div className="blog-card-content">
              <h4 className="blog-card-title">{post.title}</h4>
              <p className="blog-card-description">
                {post.description.slice(0, 50)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSlide;
