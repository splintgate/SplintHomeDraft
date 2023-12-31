import React from 'react'
import '../../../App.css';
function Methodology() {
    return (
        // <div>Methodology</div>
        <>
            <center><span className="section-heading">How We Work?</span></center><br /><br />

            <div className="work-steps">
                <div className="step">
                    <div className="content" style={{ width: '100%' }}>
                        <img src="images/search.png" alt="" className="icon" height="100" width="auto" /><br />
                        <span className="content-heading">Discover</span><br /><br />
                        <p className="content-text">
                            Through a series of onboarding questionnaires and a Zoom call, we learn about your brand and
                            the goals you hope to achieve. Together, we brainstorm strategies and solutions to your
                            target audience's pain.
                        </p>
                    </div>
                    <div className="img" style={{ width: '100%' }}>
                        <img src="images/1.png" height="250" width="auto" alt="" />
                    </div>
                </div>

                <div className="step">
                    <div className="content" style={{ width: '100%' }}>
                        <img src="images/badge.png" alt="" className="icon" height="100" width="auto" /><br />
                        <span className="content-heading">Brand & Assets</span><br /><br />
                        <p className="content-text">
                            you have branding already, we complete a brand audit to identify areas for improvement and
                            help you pull it together so we have all the pieces we need to effectively complete the
                            project including fonts and logos, and other colours and visuals.
                        </p>
                    </div>
                    <div className="img" style={{ width: '100%' }}>
                        <img src="images/2.png" height="250" width="auto" alt="" />
                    </div>
                </div>

                <div className="step">
                    <div className="content" style={{ width: '100%' }}>
                        <img src="images/ux.png" alt="" className="icon" height="100" width="auto" /><br />
                        <span className="content-heading">User Experience & Design</span><br /><br />
                        <p className="content-text">
                            User experience (UX) and (UI) designs are crucial elements in creating a successful website or app. UX
                            focuses on understanding and improving the overall user experience, ensuring that the website or app is
                            easy to use, intuitive, and enjoyable for the user.
                        </p>
                    </div>
                    <div className="img" style={{ width: '100%' }}>
                        <img src="images/3.png" height="250" width="auto" alt="" />
                    </div>
                </div>

                <div className="step">
                    <div className="content" style={{ width: '100%' }}>
                        <img src="images/tool.png" alt="" className="icon" height="100" width="auto" /><br />
                        <span className="content-heading">Development</span><br /><br />
                        <p className="content-text">
                        The Development team at Splintgate plays a key role in delivering efficient and visually appealing digital solutions, utilizing technical expertise in programming languages, technologies, and design skills
                        </p>
                    </div>
                    <div className="img" style={{ width: '100%' }}>
                        <img src="images/4.png" height="250" width="auto" alt="" />
                    </div>
                </div>

                <div className="step">
                    <div className="content" style={{ width: '100%' }}>
                        <img src="images/launch.png" alt="" className="icon" height="100" width="auto" /><br />
                        <span className="content-heading">Launch</span><br /><br />
                        <p className="content-text">Determine what you want the website or app to achieve, and who your target
                            audience is
                            ,decide on the technology platform you want to use to build your website or app.
                        </p>
                    </div>
                    <div className="img" style={{ width: '100%' }}>
                        <img src="images/5.png" height="250" width="auto" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Methodology