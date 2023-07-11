import React from 'react';
import gpt3Logo from '../../logo.svg';
import '../Footer2/footer2.css';
// import '../../App.css'

const Footer2 = () => (
  <div className="gpt3__footer">
  
    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <span className="text_logo">Splintgate</span><br />
        {/* <p>All Rights Reserved</p> */}
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        {/* <p>Overons</p> */}
        <p>Social Media</p>
        {/* <p>Counters</p> */}
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Tirupur, Tamilnadu - 641</p>
        <p>+91 9080052687</p>
        <p>splintgate01@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>Copyright ©2023 Splintgate Digital Solutions. All rights reserved.</p>
    </div>
  </div>
);

export default Footer2;
