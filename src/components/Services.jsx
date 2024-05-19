import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenNib, faListCheck, faLightbulb } from '@fortawesome/free-solid-svg-icons';

function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">Services</h2>
            <h3 className="section-subheading text-muted">This are some of the many services i offer.</h3>
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <FontAwesomeIcon icon={faPenNib} className="fa-stack-1x fa-inverse text-primary" />
            </span>
            <h4 className="service-heading">Academic Writing</h4>
            <p className="text-muted">I specialize in providing high-quality academic writing services to students, researchers, and professionals in the fields of sociology, social work, and social sciences. </p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <FontAwesomeIcon icon={faListCheck} className="fa-stack-1x fa-inverse text-primary" />
            </span>
            <h4 className="service-heading">Report and Research Writing</h4>
            <p className="text-muted">With over five years of experience, I bring a deep understanding of academic writing standards and expectations.
Quality: I am committed to delivering high-quality content that is well-researched, original, and meticulously written.
</p>
          </div>
          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <FontAwesomeIcon icon={faLightbulb} className="fa-stack-1x fa-inverse text-primary" />
            </span>
            <h4 className="service-heading">Coursework and Assignment Support</h4>
            <p className="text-muted">Essay Writing: Developing well-argued and researched essays on assigned topics.

</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;


