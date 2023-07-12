import React, { useRef } from 'react'
import '../../App.css'
import Service from './service/'
import Methodology from './Methodology/'
import 'tachyons'
import BackgroundVideo from '../../pexels3.mp4';
function Content({svc,moveToCnct}) {

  

  return (
    <>
      <div className='container'>


        <section className="intro-sec">
          <div className="intro">
            <span>We Provide</span>
            <span>Websites, Apps and Digital Solutions.</span>
            <span><br/>Accelerate your development process and product building journey with our experienced digital experts</span>
            {/* <div><button type='button'className="ibtn br3 mt5 link f4 h3 w-20 bg-mid-gray" onClick={moveToCnct}>Let's Connect &#8594; </button></div> */}
            <div className="btnr"><button type='button' className="ibtn" onClick={moveToCnct}>Let's connect &#8594; </button></div>
            
          </div>
          
        </section>

        <section ref={svc} >
          <Service/>
        </section>


        <section>
          <Methodology/>
        </section>
        <video className="background-video" autoPlay loop muted>
           <source src={BackgroundVideo} type="video/mp4" />
          </video>
      </div>
    </>
  )
}

export default Content