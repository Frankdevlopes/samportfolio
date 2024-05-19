import React from 'react';
import '../App.css'; // Adjusted import path to reflect the actual location of app.css

function Portfolio() {
  const portfolioItems = [
    {
      title: 'Research Journals, Blogs',
      description: '',
      className: 'thumbnail--awesome',
    },
    {
      title: 'Academic Papers and assignments',
      description: 'Academic Papers',
    },
    {
      title: 'Research Reports',
      description: 'Numerous qurated Research Reports that i have worked on',
      inverted: true,
    },
  ];

  return (
    <div>
      {portfolioItems.map((item, index) => (
        <div key={index} className={`showcase ${item.inverted ? 'showcase--inverted' : ''}`}>
          {!item.inverted && (
            <div className={`thumbnail ${item.className || ''}`}>
              <div className="thumbnail__overlay">
                <a className="btn" href="#0">DETAILS</a>
              </div>
            </div>
          )}
          <div className="desc">
            <p></p>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
          </div>
          {item.inverted && (
            <div className="thumbnail">
              <div className="thumbnail__overlay">
                <a className="btn" href="#0">DETAILS</a>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Portfolio;


