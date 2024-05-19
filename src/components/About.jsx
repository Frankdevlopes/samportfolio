import React from 'react';
import '../App.css';
import aboutPic from '../assets/aboutpic.jpeg'; // Import the image

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
         
           
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <img src={aboutPic} alt="About Image" className="left-image img-responsive" />
          </div>
          <div className="col-lg-8">
            <ul className="timeline">
              <li>
                <div className="timeline-image">
                  <img className="img-circle img-responsive" src="img/about/1.jpg" alt="" />
                </div>
                <div className="timeline-panel">
                  <div className="timeline-heading">
                   
                    <h4 className="subheading">ABOUT</h4>
                  </div>
                  <div className="timeline-body">
                    <p className="text-muted">I am an experienced literature research and report writer with over 5 years of expertise in producing high-quality, accurate, and informative research reports. My skills include conducting literature reviews, synthesizing research findings, and writing clear and concise reports that effectively communicate research outcomes. I am well-versed in quantitative, qualitative, and mixed methods research methodologies. </p>
                  </div>
                </div>
              </li>
              {/* Add other timeline items similarly */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

