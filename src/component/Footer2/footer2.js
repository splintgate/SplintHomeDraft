import React from 'react';
import gpt3Logo from '../../logo.svg';
import '../Footer2/footer2.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer2 = () => (
  <div className="gpt3__footer">
  
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <span className="text_logo">Splintgate</span><br />
        <ul className="social-icons">
        <li>
          <a href="https://www.facebook.com/profile.php?id=100092967646419&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/splintgateitsolutions/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Splintgate" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/company/98082485/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCLNnhLqnfhvweS1BbKKEulA" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
        </li>
      </ul>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        {/* <p>Overons</p> */}
        <p>Social Media</p>
        {/* <p>Counters</p> */}
        <p>Blogs</p>
        <p>POW</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="contact">
        <h4>Get in touch</h4>
        <p>Tirupur, Tamilnadu - 641 604</p>
        <p>+91 9080052687</p>
        <p>splintgate01@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>Copyright ©2023 Splintgate Digital Solutions. All rights reserved.
        
      </p>
      
      
    </div>

    
  </div>
);

export default Footer2;
