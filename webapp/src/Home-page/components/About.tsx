import  { useState } from 'react';

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  return (
    <div className="tabs-section section-padding bg-gray" id='about'>
      <div className="container">
        <div className="row">
          <ul className="col-md-12 nav nav-pills tabs" id="pills-tab" role="tablist">
            <li className={`nav-item one ${activeTab === 'tab1' ? 'active' : ''}`}>
              <a
                className={`nav-link ${activeTab === 'tab1' ? 'active' : ''}`}
                onClick={() => setActiveTab('tab1')}
                href="#tab1"
              >
                About Us
              </a>
            </li>
            <li className={`nav-item two ${activeTab === 'tab2' ? 'active' : ''}`}>
              <a
                className={`nav-link ${activeTab === 'tab2' ? 'active' : ''}`}
                onClick={() => setActiveTab('tab2')}
                href="#tab2"
              >
                Our Mission
              </a>
            </li>
            <li className={`nav-item three ${activeTab === 'tab3' ? 'active' : ''}`}>
              <a
                className={`nav-link ${activeTab === 'tab3' ? 'active' : ''}`}
                onClick={() => setActiveTab('tab3')}
                href="#tab3"
              >
                Why Us?
              </a>
            </li>
          </ul>

          <div className="tab-content col-lg-12" id="pills-tabContent">
            <div className={`tab-pane fade ${activeTab === 'tab1' ? 'show active' : ''}`} id="tab1">
              <div className="row">
                <div className="left col-lg-6">
                  <div className="about box-white content-box">
                    <h5 className="title">About Us</h5>
                    <h6 className="sub-title">Company Overview</h6>
                    <p>Concept Technologies and Software Solutions has grown into a leading provider...</p>
                    <div className="skills mt-40">
                      <div className="skill-item mb-30">
                        <h6>Website Design</h6>
                        <div className="skill-progress">
                          <div className="progres" style={{ width: '90%' }}></div>
                        </div>
                      </div>
                      <div className="skill-item mb-30">
                        <h6>Branding</h6>
                        <div className="skill-progress">
                          <div className="progres" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      <div className="skill-item">
                        <h6>Software Development</h6>
                        <div className="skill-progress">
                          <div className="progres" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 image">
                  <img src="src/assets/img/2.jpg" alt="" />
                </div>
              </div>
            </div>

            <div className={`tab-pane fade ${activeTab === 'tab2' ? 'show active' : ''}`} id="tab2">
              <div className="row">
                <div className="left col-lg-6">
                  <div className="mission box-white content-box">
                    <h5 className="title">Our Mission</h5>
                    <p>To empower businesses with cutting-edge technology solutions...</p>
                    <h5 className="title">Our Vision</h5>
                    <p>To be the go-to technology partner...</p>
                  </div>
                </div>
                <div className="col-lg-6 image">
                  <img src="src/assets/img/3.jpg" alt="" />
                  <a className="vid" href="https://vimeo.com/127203262">
                    <span className="vid-butn">
                      <i className="fas fa-play-circle"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className={`tab-pane fade ${activeTab === 'tab3' ? 'show active' : ''}`} id="tab3">
              <div className="row">
                <div className="left col-lg-6">
                  <div className="why-us box-white content-box">
                    <h5 className="title">Why Choose Us?</h5>
                    <ul className="feat mt-30 row">
                      <li className="col-sm-4">
                        <span className="icon icon-basic-display"></span>
                        <h6>Tailored Solutions</h6>
                        <p>We build tailor-made software solutions...</p>
                      </li>
                      <li className="col-sm-4">
                        <span className="icon icon-basic-picture-multiple"></span>
                        <h6>Expert Team</h6>
                        <p>With years of experience...</p>
                      </li>
                      <li className="col-sm-4">
                        <span className="icon icon-basic-headset"></span>
                        <h6>Customer-Centric Approach</h6>
                        <p>Your business goals are...</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-6 image">
                  <img src="src/assets/img/4.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabsSection;
