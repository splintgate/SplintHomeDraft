import React from 'react';
import '../cta/cta.css';

const CTA = ({moveToCnct}) => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <p>Request Our Experts to Consult Idea's</p>
      <h3>Register your details with us and explore the endless possibilities.</h3>
    </div>
    <div className="gpt3__cta-btn">
      <button type="button" onClick={moveToCnct}>Consult Us</button>
    </div>
  </div>
);

export default CTA;
