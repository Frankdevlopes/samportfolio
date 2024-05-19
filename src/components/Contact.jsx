import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import mylogo from '../assets/mylogo.PNG';

function Contact() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-cta pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <div className="cta-text">
                  <h4></h4>
                  <span></span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FontAwesomeIcon icon={faPhone} />
                <div className="cta-text">
                  <h4>Call me</h4>
                  <span>+254(0) 701249231</span>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-4 mb-30">
              <div className="single-cta">
                <FontAwesomeIcon icon={faEnvelopeOpen} />
                <div className="cta-text">
                  <h4>Mail me</h4>
                  <span>Jamesmuraya882@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a href="index.html"><img src={mylogo} className="img-fluid" alt="logo" /></a>
                </div>
                <div className="footer-text">
          
                </div>
                <div className="footer-social-icon">
                  <span>My Social Media Handles</span>
                  <a href="#"><i className="fab fa-facebook-f facebook-bg"></i></a>
                  <a href="#"><i className="fab fa-twitter twitter-bg"></i></a>
                
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3></h3>
                </div>
               
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="footer-widget">
                <div className="footer-widget-heading">
                  <h3>Subscribe to Academic papers</h3>
                </div>
                <div className="footer-text mb-25">
                  <p></p>
                </div>
                <div className="subscribe-form">
                  <form action="#">
                    <input type="text" placeholder="Email Address" />
                    <button><i className="fab fa-telegram-plane"></i></button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                <div className="copyright-text">
                  <p>Copyright &copy; 2024, All Right Reserved <a href="https://www.linkedin.com/in/francis-mwaura-kimwaki-2b6b78298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app/">Frankdevlopes</a></p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                <div className="footer-menu">
                  <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Terms</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Policy</a></li>
                    <li><a href="#">Contact</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
