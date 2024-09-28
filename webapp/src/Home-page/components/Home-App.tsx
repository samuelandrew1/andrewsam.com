import pic from '../../assets/Images/pic.jpg'

const HomeApp = () => {


    return (
<>
 <header className="header pos-re slider-fade" data-scroll-index="0">
<div className="owl-carousel owl-theme">
    <div className="item bg-img" data-overlay-dark="5" data-background="src/assets/img/bg4.jpg">
        <div className="text-center v-middle caption mt-30">
            <h4>we</h4>
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
    <div className="item bg-img" data-overlay-dark="5" data-background="src/assets/img/bg1.jpg">
        <div className="text-center v-middle caption mt-30">
            <h4>Empower Businesses</h4>
            <h1> Through Cutting-Edge Technologies</h1>
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
    <div className="item bg-img" data-overlay-dark="5" data-background="src/assets/img/bg2.jpg">
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
</div>
</header>
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
                        <ul className="col-md-12 nav nav-pills tabs" id="pills-tab" role="tablist" >
                            <li className="nav-item one active">
                                <a className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#tab1" role="tab" aria-controls="tab1" aria-selected="true">About Us</a>
                            </li>
                            <li className="nav-item two">
                                <a className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#tab2" role="tab" aria-controls="tab2" aria-selected="false">Our Mission</a>
                            </li>
                            <li className="nav-item three">
                                <a className="nav-link" id="pills-contact-tab" data-toggle="pill" href="#tab3" role="tab" aria-controls="tab3" aria-selected="false">Why Us?</a>
                            </li>
                        </ul>
                        
                        <div className="tab-content col-lg-12" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="tab1" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className="row">
                                    <div className="left col-lg-6">
                                        <div className="about box-white">
                                            <h5 className="title">About Us</h5>
                                            <h6 className="sub-title">Company Overview</h6>
                                            <p>Concept Technologies and Software Solutions has grown into a leading provider of custom software and technology solutions. We are dedicated to helping businesses navigate the digital landscape, offering services that drive productivity, innovation, and success. Our focus is to build long-term partnerships with clients by delivering solutions that add real value to their business.
                                            </p>
                                            <div className="skills mt-40">
                                                <div className="skill-item mb-30">
                                                    <h6>Website Design</h6>
                                                    <div className="skill-progress">
                                                        <div className="progres" data-value="90%"></div>
                                                    </div>
                                                </div>
                                                <div className="skill-item mb-30">
                                                    <h6>Branding</h6>
                                                    <div className="skill-progress">
                                                        <div className="progres" data-value="75%"></div>
                                                    </div>
                                                </div>
                                                <div className="skill-item">
                                                    <h6>Software Development</h6>
                                                    <div className="skill-progress">
                                                        <div className="progres" data-value="95%"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 image">
                                        <div className="img">
                                            <img src="src/assets/img/2.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab2" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className="row">
                                    <div className="left col-lg-6">
                                        <div className="mission box-white">
                                            <h5 className="title">Our Mission</h5>
                                            {/* <h6 className="sub-title">Mission Statement</h6> */}
                                            <p className="mb-10">
                                            To empower businesses with cutting-edge technology solutions that foster growth, efficiency, and sustainability.
                                            </p>

                                            <h5 className="title">Our Vision</h5>

                                            <p>To be the go-to technology partner for businesses, driving transformation and success through innovation and dedication.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 image">
                                        <div className="img">
                                            <img src="img/3.jpg" alt=""/>
                                            <a className="vid" href="https://vimeo.com/127203262">
                                                <span className="vid-butn">
                                                    <i className="fas fa-play-circle"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab3" role="tabpanel" aria-labelledby="pills-home-tab">
                                <div className="row">
                                    <div className="left col-lg-6">
                                        <div className="why-us box-white">
                                            <h5 className="title">Why Choose Us?</h5>
                                            <h6 className="sub-title"></h6>
                                            <p> Every solution we create is custom-designed to fit your business needs.</p>
                                            <ul className="feat mt-30 row">
                                                <li className="col-sm-4">
                                                    <span className="icon icon-basic-display"></span>
                                                    <h6>Tailored Solutions:</h6>
                                                    <p>We Build tailor-made software solutions designed to meet your specific business needs.</p>
                                                </li>
                                                <li className="col-sm-4">
                                                    <span className="icon icon-basic-picture-multiple"></span>
                                                    <h6>Expert Team:</h6>
                                                    <p>With years of experience in the tech industry, our team is equipped to handle projects of any complexity.</p>
                                                </li>
                                                <li className="col-sm-4">
                                                    <span className="icon icon-basic-headset"></span>
                                                    <h6>Customer-Centric Approach:</h6>
                                                    <p>Your business goals are at the heart of everything we do.</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 image">
                                        <div className="img owl-carousel owl-theme carousel-single">
                                            <img src="src/assets/img/4.jpg" alt=""/>
                                            <img src="src/assets/img/5.jpg" alt=""/>
                                            <img src="src/assets/img/2.jpg" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

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
    <section className="contact section-padding" data-scroll-index="6" id="contact">
           <div className="container">
               <div className="row">
                    <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                        <h4>Con<span>tact</span> us</h4>
                        <p>We're always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question, a project proposal, or just want to say hello, feel free to reach out!</p>
                    </div>                  
                    <div className="col-lg-5">
                        <div className="contact-info mb-md50">
                            <h5>Contact Me :</h5>
                            <p>Please fill out the form below, and I'll get back to you as soon as possible.</p>
                            <div className="item">
                                <span className="icon icon-basic-tablet"></span>
                                <div className="cont">
                                    <h6>Phone : </h6>
                                    <p>+234 814 300 6319</p>
                                </div>
                            </div>
                            <div className="item">
                                <span className="icon icon-basic-mail-open-text"></span>
                                <div className="cont">
                                    <h6>Email : </h6>
                                    <p>samuelandrew145@gmail.com</p>
                                </div>
                            </div>
                            <div className="item">
                                <span className="icon icon-basic-geolocalize-05"></span>
                                <div className="cont">
                                    <h6>Address :  </h6>
                                    <p>No. 160, samuel ladoke akintola boulevard, Garki 2. Abuja</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-7">
                        <form className="form" id="contact-form" method="post" action="http://innovationplans.com/idesign/coco3/contact.php">

                            <div className="messages"></div>

                            <div className="controls">

                                <div className="row">

                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input id="form_name" type="text" name="name" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <input id="form_email" type="email" name="email" placeholder="Email" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <input id="form_subject" type="text" name="subject" placeholder="Subject" />
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group">
                                            <textarea id="form_message" name="message" placeholder="Message" ></textarea>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <button type="submit" className="butn butn-bg"><span>Send Message</span></button>
                                    </div>
                                </div>                             
                            </div>
                        </form>
                    </div>
               </div>
           </div>
       </section>
    </>
)
}
export default HomeApp