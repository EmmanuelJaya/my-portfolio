import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const AboutPage = () => {
  return (
    <div className="about-container">
      <FontAwesomeIcon icon={faTwitter} size="3x" className="twitter-icon" />
    </div>
  );
}

export default AboutPage;
