import { useState, useEffect } from 'react';
import img2 from '../../assets/img/2.jpg';
import img4 from '../../assets/img/4.jpg';
import img3 from '../../assets/img/3.jpg';
import styles from './TabsSection.module.css';

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [progressWidths, setProgressWidths] = useState({
    design: 0,
    branding: 0,
    development: 0,
  });

  useEffect(() => {
    if (activeTab === 'tab1') {
      // Animating progress bar widths when "About Us" tab is active
      setTimeout(() => {
        setProgressWidths({
          design: 90,
          branding: 75,
          development: 95,
        });
      }, 200); // Small delay to trigger animation
    } else {
      // Reset the progress bar widths when switching tabs
      setProgressWidths({
        design: 0,
        branding: 0,
        development: 0,
      });
    }
  }, [activeTab]);

  return (
    <div className={styles['tabs-section']} id="about">
      <div className="container">
        <div className="row">
          <ul className={`col-md-12 nav nav-pills ${styles.tabs}`} id="pills-tab" role="tablist">
            <li className={`nav-item ${activeTab === 'tab1' ? 'active' : ''}`}>
              <a
                className={`nav-link ${activeTab === 'tab1' ? styles.active : ''}`}
                onClick={() => setActiveTab('tab1')}
                href="#tab1"
              >
                About Us
              </a>
            </li>
            <li className={`nav-item ${activeTab === 'tab2' ? 'active' : ''}`}>
              <a
                className={`nav-link ${activeTab === 'tab2' ? styles.active : ''}`}
                onClick={() => setActiveTab('tab2')}
                href="#tab2"
              >
                Our Mission
              </a>
            </li>
            <li className={`nav-item ${activeTab === 'tab3' ? 'active' : ''}`}>
              <a
                className={`nav-link ${activeTab === 'tab3' ? styles.active : ''}`}
                onClick={() => setActiveTab('tab3')}
                href="#tab3"
              >
                Why Us?
              </a>
            </li>
          </ul>

          <div className={`tab-content col-lg-12 ${styles['tab-content']}`} id="pills-tabContent">
            <div
              className={`tab-pane fade ${activeTab === 'tab1' ? 'show active' : ''}`}
              id="tab1"
            >
              <div className="row">
                <div className={`left col-lg-6 ${styles.about}`}>
                  <div className="box-white content-box">
                    <h5 className="title">About Us</h5>
                    <h6 className="sub-title">Company Overview</h6>
                    <p>
                      Concept Technologies and Software Solutions has grown into a leading provider...
                    </p>
                    <div className={`skills mt-40 ${styles.skills}`}>
                      <div className={`skill-item mb-30 ${styles['skill-item']}`}>
                        <h6>Website Design</h6>
                        <div className={`skill-progress ${styles['skill-progress']}`}>
                          <div className={styles.progres} style={{ width: `${progressWidths.design}%` }}>
                            <span className={styles['progress-text']}>{`${progressWidths.design}%`}</span>
                          </div>
                        </div>
                      </div>
                      <div className={`skill-item mb-30 ${styles['skill-item']}`}>
                        <h6>Branding</h6>
                        <div className={`skill-progress ${styles['skill-progress']}`}>
                          <div className={styles.progres} style={{ width: `${progressWidths.branding}%` }}>
                            <span className={styles['progress-text']}>{`${progressWidths.branding}%`}</span>
                          </div>
                        </div>
                      </div>
                      <div className={styles['skill-item']}>
                        <h6>Software Development</h6>
                        <div className={`skill-progress ${styles['skill-progress']}`}>
                          <div className={styles.progres} style={{ width: `${progressWidths.development}%` }}>
                            <span className={styles['progress-text']}>{`${progressWidths.development}%`}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`col-lg-6 ${styles.image}`}>
                  <img src={img2} alt="About us" />
                </div>
              </div>
            </div>

            <div
              className={`tab-pane fade ${activeTab === 'tab2' ? 'show active' : ''}`}
              id="tab2"
            >
              <div className="row">
                <div className={`left col-lg-6 ${styles.mission}`}>
                  <div className="box-white content-box">
                    <h5 className="title">Our Mission</h5>
                    <p>To empower businesses with cutting-edge technology solutions...</p>
                    <h5 className="title">Our Vision</h5>
                    <p>To be the go-to technology partner...</p>
                  </div>
                </div>
                <div className={`col-lg-6 ${styles.image}`}>
                  <img src={img3} alt="Our mission" />
                  <a className={styles.vid} href="https://vimeo.com/127203262">
                    <span className={styles['vid-butn']}>
                      <i className="fas fa-play-circle"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div
              className={`tab-pane fade ${activeTab === 'tab3' ? 'show active' : ''}`}
              id="tab3"
            >
              <div className="row">
                <div className={`left col-lg-6 ${styles['why-us']}`}>
                  <div className="box-white content-box">
                    <h5 className="title">Why Us?</h5>
                    <ul className="feat">
                      <li><i className="icon fas fa-lightbulb"></i> Innovative Solutions</li>
                      <li><i className="icon fas fa-headset"></i> Expert Support</li>
                      <li><i className="icon fas fa-users"></i> Client-Centric Approach</li>
                    </ul>
                  </div>
                </div>
                <div className={`col-lg-6 ${styles.image}`}>
                  <img src={img4} alt="Why us?" />
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
