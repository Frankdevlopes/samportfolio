import React from 'react';

function Team() {
  const teamMembers = [
    {
      name: "Expertise",
      position: "Lead With over five years of experience, I bring a deep understanding of academic writing standards and expectations.",
      imageUrl: "http://www.mycatspace.com/wp-content/uploads/2013/08/adopting-a-cat.jpg",
      social: {
        twitter: "#",
        facebook: "#",
        linkedin: "#"
      }
    },
    {
      name: "Quality",
      position: "I am committed to delivering high-quality content that is well-researched, original, and meticulously writte",
      imageUrl: "http://www.mycatspace.com/wp-content/uploads/2013/08/adopting-a-cat.jpg",
      social: {
        twitter: "#",
        facebook: "#",
        linkedin: "#"
      }
    },
    {
      name: "Reliability",
      position: "As a dependable writer, I ensure timely delivery of your projects, meeting the required specifications",
      imageUrl: "http://www.mycatspace.com/wp-content/uploads/2013/08/adopting-a-cat.jpg",
      social: {
        twitter: "#",
        facebook: "#",
        linkedin: "#"
      }
    }
  ];

  return (
    <section id="team" className="bg-light-gray">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading"> Why Choose My Services</h2>
            <h3 className="section-subheading text-muted"></h3>
          </div>
        </div>
        <div className="row">
          {teamMembers.map((member, index) => (
            <div key={index} className="col-sm-4">
              <div className="team-member">
                <img src={member.imageUrl} className="img-responsive img-circle" alt="" />
                <h4>{member.name}</h4>
                <p className="text-muted">{member.position}</p>
                <ul className="list-inline social-buttons">
                  <li><a href={member.social.twitter}><i className="fa fa-twitter"></i></a></li>
                  <li><a href={member.social.facebook}><i className="fa fa-facebook"></i></a></li>
                  <li><a href={member.social.linkedin}><i className="fa fa-linkedin"></i></a></li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 text-center">
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;

