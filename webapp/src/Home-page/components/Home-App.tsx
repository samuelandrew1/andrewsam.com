import pic from '../../assets/Images/pic.jpg'
import TabsSection from './About'
import CarouselComponent from './Carousel'
import ContactForm from './ContactForm'

const HomeApp = () => {


    return (
<>
<CarouselComponent/>
    <div className="why-us section-padding bg-gray pos-re">
    <div className="container">
        <div className="row">            
            <div className="col-lg-6">
                <div className="img mb-md50">
                    <img src={pic} alt=""/>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="content pt-10">
                    <div className="item mb-40">
                        <span className="icon icon-basic-display"></span>
                        <div className="cont">
                            <h5>Fully Responsive</h5>
                            <p>our designs are fully responsive, ensuring they look and function beautifully on any device, whether it's a desktop, tablet, or smartphone.</p>
                        </div>
                    </div>
                    <div className="item mb-40">
                        <span className="icon icon-basic-bolt"></span>
                        <div className="cont">
                            <h5>Clean & Modern Design</h5>
                            <p>We prioritize clean and modern design principles, creating visually appealing and user-friendly interfaces that enhance user experience.</p>
                        </div>
                    </div>
                    <div className="item">
                        <span className="icon ic,on-basic-headset"></span>
                        <div className="cont">
                            <h5>Proven Track Record</h5>
                            <p>With a portfolio of successful projects, we have a proven track record of delivering high-quality work that meets client expectations and drives results.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="curve curve-top"></div>
    <div className="curve curve-bottom"></div>
</div>


<div className="process section-padding bg-img bg-fixed pos-re text-center" data-overlay-dark="7" data-background="img/bg6.jpg">
            <div className="container">
                <div className="row">

                    <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                        <h4><span>Our</span> Process</h4>
                        <p>We are a passionate digital design agency that specializes in beautiful and easy-to-use digital design & web development services.</p>
                    </div>
                    <div className="full-width clearfix"></div>
                    
                    <div className="col-lg-3 col-md-6">
                        <div className="item first mb-md50">
                            <img src="img/arrow.png" className="tobotm" alt=""/>
                            <span className="icon icon-basic-lightbulb"></span>
                            <div className="cont">
                                <h3>01</h3>
                                <h6>Requirement Gathering:</h6>
                                <p>We work closely with your team to understand your business needs and objectives, and translate them into a clear project scope.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="item odd mb-md50">
                            <img src="img/arrow.png" alt=""/>
                            <span className="icon icon-basic-book-pencil"></span>
                            <div className="cont">
                                <h3>02</h3>
                                <h6>Planning & Design:</h6>
                                <p>Once the requirements are gathered, we design a solution tailored to your needs, defining the system architecture, UI/UX, and tech stack.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="item mb-sm50">
                            <img src="img/arrow.png" className="tobotm" alt="" />
                            <span className="icon icon-basic-pencil-ruler"></span>
                            <div className="cont">
                                <h3>03</h3>
                                <h6>Development</h6>
                                <p>Our team of expert developers brings the design to life, following agile methodologies to ensure flexibility and timely delivery.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="item odd">
                            <span className="icon icon-basic-server-upload"></span>
                            <div className="cont">
                                <h3>04</h3>
                                <h6>Testing</h6>
                                <p>We rigorously test the software for functionality, performance, and security to ensure everything works smoothly.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="item odd">
                            <span className="icon icon-basic-server-upload"></span>
                            <div className="cont">
                                <h3>05</h3>
                                <h6>Deployment</h6>
                                <p>After successful testing, we deploy the solution in your environment and ensure a seamless transition.</p>
                            </div>
                        </div>
                    </div>

                    
                
                    <div className="col-lg-3 col-md-6">
                        <div className="item odd">
                            <span className="icon icon-basic-server-upload"></span>
                            <div className="cont">
                                <h3>06</h3>
                                <h6>Feedback & Continuous Improvement:</h6>
                                <p>Your Feedback Matters: After deployment, we actively seek your feedback through our customer feedback form, email, and social media.</p>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-lg-3 col-md-6">
                        <div className="item odd">
                            <span className="icon icon-basic-server-upload"></span>
                            <div className="cont">
                                <h3>07</h3>
                                <h6>Maintenance & Support:</h6>
                                <p>We provide continuous support and maintenance to keep your system updated, secure, and performing at its best.</p>
                            </div>
                        </div>
                    </div>

                </div>
                <a href="#0" className="butn butn-bg m-5">
                                <span>Get Started</span>
                            </a>
            </div>

            <div className="curve curve-gray-t curve-top"></div>
            <div className="curve curve-bottom"></div>
        </div>



{/* about our us session */}
    <section className="hero" data-scroll-index="1">
            <div className="section-padding pos-re">
                <div className="container">
                    <div className="row">
                        <div className="offset-lg-2 col-lg-8 offset-md-1 col-md-10 text-center mb-80">
                            <h4 className="extra-title">Our<span>Services</span></h4>
                            <p>At Concept Technologies and Software Solutions, we specialize in providing custom-built software and technology solutions that drive innovation, efficiency, and growth for businesses of all sizes. Whether you're looking to develop software from scratch, revamp an existing system, or migrate to the cloud, we offer tailor-made solutions that align perfectly with your business goals. Our expert team ensures that every solution we provide is scalable, reliable, and tailored to your unique needs.</p>
                        </div>

                        <div className="feat-item mb-md50 col-lg-4">
                            <div className="text-center">
                                <span className="icon icon-basic-anchor"></span>
                                <h5>Web Design</h5>
                                <h6>Modern & Clean Design</h6>
                                <p>Craft responsive and dynamic websites that offer an excellent user experience and align with your business goals.</p>
                       
                            </div>
                        </div>

                        <div className="feat-item active mb-md50 col-lg-4">
                            <div className="text-center">
                                <span className="icon icon-basic-pencil-ruler"></span>
                                <h5>Custom Software Development</h5>
                                <h6>web and Mobile application</h6>
                                <p>Build tailor-made software solutions designed to meet your specific business needs.
                                </p>                        
                            </div>
                        </div>

                        <div className="feat-item col-lg-4">
                            <div className="text-center">
                                <span className="icon icon-basic-cards-diamonds"></span>
                                <h5>Branding</h5>
                                <h6>Logo & Motion Design</h6>
                                <p></p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="curve curve-gray-b curve-bottom"></div>
            </div>

            <div className="tabs-section section-padding bg-gray" id='about'>
                <div className="container">
                    <div className="row">
                        <ul className="col-md-12 nav nav-pills tabs">
                 
                        </ul>
                        
                      <TabsSection/>
                    </div>
                </div>
            </div>
        </section>


        <section className="call-action section-padding bg-img bg-fixed" data-overlay-dark="5" data-background="img/bg2.jpg">
            <div className="container">
                <div className="row">           
                    <div className="col-lg-12">
                        <div className="text-center">
                            <h2>Want to work with us?</h2>
                            <h5>Tell me about your project</h5>
                            <a href="#0" className="butn butn-bg">
                                <span>Get Started</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
    </section>



{/* contact session */}
 <ContactForm/>
</>
)
}
export default HomeApp