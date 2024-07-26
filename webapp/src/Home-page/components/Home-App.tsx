import "../../assets/css/plugins.css"
import "../../assets/css/style.css"
// import "../../assets/js/scripts.js"
import "../../assets/js/validator.js"
import pic from '../../assets/Images/pic.jpg'
// import "../../assets/js/app.js"
// import "../../assets/js/particles.min.js"
// import "../../assets/js/YouTubePopUp.jquery.js"
// import "../../assets/js/jquery.stellar.min.js"
// import "../../assets/js/isotope.pkgd.min.js"
// import "../../assets/js/owl.carousel.min.js"
// import "../../assets/js/jquery.magnific-popup.min.js"
// import "../../assets/js/jquery.waypoints.min.js"
// import "../../assets/js/scrollIt.min.js"
// import "../../assets/js/bootstrap.min.js"
// import "../../assets/js/popper.min.js"
// import "../../assets/js/jquery-migrate-3.0.0.min.js"
// import "../../assets/js/jquery-3.0.0.min.js"

const HomeApp = () => {


    return (
        <>
        <header className="header valign " data-scroll-index="0" data-overlay-dark="7" data-background="img/bg3.jpg" data-stellar-background-ratio="0.5" id="head-img">  
        <div id="particles-js"></div>

        <div className="container">
            <div className="text-center caption mt-30">
                <h3 style={{fontFamily: 'cursive'}}>Building Scalable Web Applications <small>  with Precision and Creativity</small></h3>
                
                <div className="row">
                    <div className="offset-md-1 col-md-10 offset-lg-2 col-lg-8">
                        <p>Welcome to my portfolio! I'm andrew samuel T, a passionate full-stack software engineer with a knack for crafting scalable and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I thrive on transforming ideas into real-world solutions. My journey in the tech world has been driven by a love for continuous learning and innovation. Let's explore my work and expertise!</p>
                    </div>
                </div>
                <a href="" className="butn butn-light mt-30">
                    <span>Download Cv</span>
                </a>
            </div>
        </div>

        <div className="curve curve-bottom curve-center"></div>
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
                            <p>My designs are fully responsive, ensuring they look and function beautifully on any device, whether it's a desktop, tablet, or smartphone.</p>
                        </div>
                    </div>
                    <div className="item mb-40">
                        <span className="icon icon-basic-bolt"></span>
                        <div className="cont">
                            <h5>Clean & Modern Design</h5>
                            <p>I prioritize clean and modern design principles, creating visually appealing and user-friendly interfaces that enhance user experience.</p>
                        </div>
                    </div>
                    <div className="item">
                        <span className="icon ic,on-basic-headset"></span>
                        <div className="cont">
                            <h5>Proven Track Record</h5>
                            <p>With a portfolio of successful projects, I have a proven track record of delivering high-quality work that meets client expectations and drives results.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="curve curve-top"></div>
    <div className="curve curve-bottom"></div>
</div>

    <section className="call-action section-padding bg-img bg-fixed" data-overlay-dark="5" data-background="img/bg2.jpg">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-12">
                        <div className="text-center">
                            <h2>Want to work with me?</h2>
                            <h5>Tell me about your project</h5>
                            <a href="#0" className="butn butn-bg">
                                <span>Get Started</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
    </section>

    <section className="contact section-padding" data-scroll-index="6" id="contact">
           <div className="container">
               <div className="row">
                    <div className="section-head offset-md-2 col-md-8 offset-lg-3 col-lg-6">
                        <h4>Get <span>In</span> Touch</h4>
                        <p>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question, a project proposal, or just want to say hello, feel free to reach out!</p>
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
                                    <p>samuelandrew145@gmailcom</p>
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