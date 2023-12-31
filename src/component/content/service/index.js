import React from 'react'
import '../../../App.css'

function Service() {
    return (
        <>
            <span className="service_item flex align-items-center" 
            style={{  fontSize: '50px', backgroundColor: '#7857ff',
                        backgroundImage: 'linear-gradient(81.02deg, #fa5560 -23.47%, #b14bf4 45.52%, #4d91ff 114.8%)' , backgroundsize:'100%' , backgroundRepeat: 'repeat',
                        backgroundRepeatX: 'repeat',
                        backgroundRepeatY: 'repeat',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        MozBackgroundClip: 'text',
                        marginTop : '17%'
                    }}
  >WE SPEACILIZE
                IN</span>
            <div>
                <span className="service_item flex align-items-center" data-service-id="1"
                    data-background=" linear-gradient(111.41deg, #015452 -9.66%, rgba(1, 84, 82, 0.8) 109.41%)">Branding &
                    Identity<svg width="50" height="50" viewBox="0 0 40 40" fill="none" className="arrow_icon"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 19.75L36 19.75" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M28 11L36.75 19.75L28 28.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </span>
                <span className="service_item" data-service-id="2"
                    data-background="linear-gradient(110.47deg, #B51C1C -6.79%, rgba(181, 28, 28, 0.8) 109.82%)">UI &UX <svg
                        width="50" height="50" viewBox="0 0 40 40" fill="none" className="arrow_icon"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 19.75L36 19.75" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M28 11L36.75 19.75L28 28.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg></span>
                <span className="service_item" data-service-id="3"
                    data-background="linear-gradient(110.47deg, #173774 -6.79%, #21407C 109.82%)">Web Development <svg
                        width="50" height="50" viewBox="0 0 40 40" fill="none" className="arrow_icon"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 19.75L36 19.75" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M28 11L36.75 19.75L28 28.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg></span>
                <span className="service_item" data-service-id="4"
                    data-background=" linear-gradient(110.47deg, #4E3688 -6.79%, #271551 109.82%)">App Development <svg
                        width="50" height="50" viewBox="0 0 40 40" fill="none" className="arrow_icon"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 19.75L36 19.75" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M28 11L36.75 19.75L28 28.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg></span>
                <span className="service_item" data-service-id="5"
                    data-background=" linear-gradient(110.47deg, #876016 -6.79%, rgba(187, 127, 14, 0.8) 109.82%)">eCommerce
                    Experiences <svg width="50" height="50" viewBox="0 0 40 40" fill="none" className="arrow_icon"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 19.75L36 19.75" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M28 11L36.75 19.75L28 28.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg></span>
                <span className="service_item" data-service-id="6"
                    data-background=" linear-gradient(110.47deg, #876016 -6.79%, rgba(187, 127, 14, 0.8) 109.82%)">IT Consultancy & HR Staffing
                        <svg width="50" height="50" viewBox="0 0 40 40" fill="none" className="arrow_icon"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 19.75L36 19.75" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M28 11L36.75 19.75L28 28.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg></span>
                <span className="service_item" data-service-id="7"
                    data-background=" linear-gradient(110.47deg, #876016 -6.79%, rgba(187, 127, 14, 0.8) 109.82%)">Corporate Trainings
                        <svg width="50" height="50" viewBox="0 0 40 40" fill="none" className="arrow_icon"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 19.75L36 19.75" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path d="M28 11L36.75 19.75L28 28.5" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg></span>    
            </div>

            {/* <div className="background_images flex justify-content-center align-items-center">
                <img src="../../assets/blog05.png" data-service-id="4" className="service_background_images" />
                <img src="../../assets/blog05.png" data-service-id="1" className="service_background_images" />
                <img src="../../assets/blog05.png" data-service-id="3" className="service_background_images" />
                <img src="../../assets/blog05.png" data-service-id="5" className="service_background_images" />
            </div> */}
        </>
    )
}

export default Service