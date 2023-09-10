import React, { useState, useEffect } from 'react';
import '../../App.css';

function Footer({ cnct }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check the viewport width and update the state accordingly
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check on component mount
    handleResize();

    // Add a window resize listener
    window.addEventListener('resize', handleResize);

    // Clean up the listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const contactUsClassName = isMobile ? 'flex w-100 flex-direction-column self-end' : 'flex w-70 flex-direction-column self-end';
  const spanClassname = isMobile ? 'self-start w-100' : 'self-start';

  return (
    <div className='w-100'>
      <footer data-scroll-section className="container h-100 flex" ref={cnct}>
        <div className={spanClassname}>
          <div className="footer_heading">
            <span className='b'>Have an Idea?</span><br />
            <span>Tell us about it</span>
          </div>
          <div className="company_details flex justify-content-space-between flex-direction-column">
            <span><a href="mailto:splintgate01@gmail.com">info@splintgate.com</a></span>
            <span><a href="tel:+919080052687">+91 9080052687</a></span>
            <span>
              <address>
                Tirupur, Tamilnadu - 641 604</address>
            </span>
          </div>
        </div>
        {/* Apply the conditionally determined class name */}
        <div className={contactUsClassName}>
          <div className="contactUs w-100 ">
            <form method="POST" action="https://formspree.io/f/xrgwbakl" className='ml5 w-90' >
              <label htmlFor="name">Name :</label>
              <input type="text" id="name" name="name" required style={{ backgroundColor: '#2b2b2c' }} onClick={{ backgroundColor: 'white' }} /><br />

              <label htmlFor="email">Email :</label>
              <input type="email" id="email" name="email" required style={{ backgroundColor: '#2b2b2c' }} /><br />

              <label htmlFor="mobile">Mobile No. :</label>
              <input type="text" id="mobile" name="mobile" style={{ backgroundColor: '#2b2b2c', color: 'white' }} /><br />

              <label htmlFor="message">Message :</label>
              <textarea id="message" name="message" rows="5" required style={{ backgroundColor: '#2b2b2c' }}></textarea><br />

              <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
