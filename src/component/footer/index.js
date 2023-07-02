import React from 'react'
import '../../App.css'
function Footer({ cnct }) {
    return (
        // <div>Footer</div>
        <>
            <div className='w-100'>
                <footer data-scroll-section className="container h-100 flex" ref={cnct}>
                    <div className='self-start'>
                        <div className="footer_heading">
                            <span className='b'>Have an Idea?</span><br />
                            <span>Tell us about it</span>
                        </div>
                        <div className="company_details flex justify-content-space-between flex-direction-column">
                            <span><a href="mailto:info@splintgate.com">splintgate01@gmail.com</a></span>
                            <span><a href="mailto:info@splintgate.com">+91 9080052687</a></span>
                            <span>
                                <address>
                                    Tirupur , Tamilnadu - 641 604</address>
                            </span>
                            <span><a href="">Privacy Policy</a></span>
                        </div>
                    </div>
                    <div className=" flex w-70 flex-direction-column self-end">
                        <div className="contactUs w-100 ">
                            <form method="post" action="" className='ml5 w-90' >
                                <label for="name">Name :</label>
                                <input type="text" id="name" name="name" required style={{backgroundColor:'#2b2b2c'}} /><br />

                                <label for="email">Email :</label>
                                <input type="email" id="email" name="email" required style={{backgroundColor:'#2b2b2c'}}/><br />

                                <label for="mobile">Mobile No. :</label>
                                <input type="text" id="mobile" name="mobile" style={{backgroundColor:'#2b2b2c'}}/><br />

                                <label for="message">Message :</label>
                                <textarea id="message" name="message" rows="5" required style={{backgroundColor:'#2b2b2c'}}></textarea><br />

                                <input type="submit" value="Submit" />
                            </form>
                        </div>
                        <div className="social_media_wrapper ml7 mt6 flex flex-direction-column align-items-center">
                            <span>
                                <a href="" className="social_media_link">Facebook</a>
                                <a href="" className="social_media_link">Dribble</a>
                            </span>
                            <span>
                                <a href="" className="social_media_link">Instagram</a>
                                <a href="" className="social_media_link">Linkden</a>
                            </span>
                        </div>
                    </div>

                </footer>
            </div>
        </>
    )
}

export default Footer