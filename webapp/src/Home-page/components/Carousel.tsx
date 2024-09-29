
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import OwlCarousel from 'react-owl-carousel';
import './Carousel.css'; // Custom styling

const CarouselComponent = () => {
  const options = {
    items: 1, // Show one slide at a time
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 4000,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    dots: true, // Show dots navigation
    nav: false, // Hide next/prev buttons
    smartSpeed: 1000,
  };

  return (
    <header className="header pos-re slider-fade" data-scroll-index="0">
      <OwlCarousel className="owl-theme" {...options}>
        <div className="item bg-img" data-overlay-dark="5" style={{ backgroundImage: "url('/src/assets/img/bg4.jpg')" }}>
          <div className="text-center v-middle caption mt-30">
            <h4>We</h4>
            <h1>Drive Innovation</h1>
            <div className="row">
              <div className="offset-md-1 col-md-10 offset-lg-2 col-lg-8">
                <p>Building seamless digital ecosystems to drive efficiency and growth.</p>
              </div>
            </div>
            <a href="#0" className="butn butn-light mt-30">
              <span>Explore Our Services</span>
            </a>
          </div>
        </div>
        <div className="item bg-img" data-overlay-dark="5" style={{ backgroundImage: "url('/src/assets/img/bg1.jpg')" }}>
          <div className="text-center v-middle caption mt-30">
            <h4>Empower Businesses</h4>
            <h1>Through Cutting-Edge Technologies</h1>
            <div className="row">
              <div className="offset-md-1 col-md-10 offset-lg-2 col-lg-8">
                <p>Harnessing the latest in technology to elevate business performance.</p>
              </div>
            </div>
            <a href="#0" className="butn butn-light mt-30">
              <span>Explore Our Services</span>
            </a>
          </div>
        </div>
        <div className="item bg-img" data-overlay-dark="5" style={{ backgroundImage: "url('/src/assets/img/bg2.jpg')" }}>
          <div className="text-center v-middle caption mt-30">
            <h4>Transforming Ideas</h4>
            <h1>into Digital Solutions with Advanced Technologies</h1>
            <div className="row">
              <div className="offset-md-1 col-md-10 offset-lg-2 col-lg-8">
                <p>From concept to execution, delivering tailored software solutions for modern challenges.</p>
              </div>
            </div>
            <a href="#0" className="butn butn-light mt-30">
              <span>Explore Our Services</span>
            </a>
          </div>
        </div>
      </OwlCarousel>
    </header>
  );
};

export default CarouselComponent;
