import React from 'react'
import '../../App.css'
import tachyons from 'tachyons';

function Navbar({ moveToSvc, moveToCnct }) {
  return (
    // <div >
      <nav className=''>
        <ul className="flex flex-column">
          <div className='self-end flex justify-around pa3'>
            <li className="nav-item pa2 br4 ba bw1 hover-bg-purple b--purple ma3 pa3 tc w4" onClick={moveToSvc}>Services</li>
            <li className="nav-item pa2 br4 ba bw1 hover-bg-purple b--purple ma3 pa3 tc w4">Blogs</li>
            <li className="nav-item pa2 br4 ba bw1 hover-bg-purple b--purple ma3 pa3 tc w4" onClick={moveToCnct}>Connect</li>
          </div>
        </ul>
      </nav>
    //  </div>
  )
}

export default Navbar