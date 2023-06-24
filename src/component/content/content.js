import React, { useRef } from 'react'
import '../../App.css'
import Service from './service/'
import Methodology from './Methodology/'
import 'tachyons'

function Content({svc}) {

  

  return (
    <>
      <div className='container'>


        <section className="intro-sec">
          <div className="intro">
            <span>We Provide</span>
            <span>Websites, Apps and Digital Solutions.</span>
            <span>Accelerate your development a dedicated team of experts developers.</span>
            <div><button className="ibtn br3 mt5 link f4 h3 w-20 bg-mid-gray">Let's talk &#8594; </button></div>
          </div>
        </section>

        <section ref={svc} >
          <Service/>
        </section>


        <section>
          <Methodology/>
        </section>

      </div>
    </>
  )
}

export default Content