import React from "react";

function Contact(): React.ReactElement {
    return(
        <footer>
            <div>
                <div className='panel'>
                    <h2 className='left-panel'>&lt;Contact&gt;</h2>
                    <div className='right-panel'>
                        <p>Samuel Chan</p>
                        <p>samch000 [at] cs [dot] washington [dot] edu</p>
                        <p className='link'>UW Honors Portfolio</p>
                    </div>
                </div>

                <div className='panel'>
                    <h2 className='left-panel'>&lt;Mailing List&gt;</h2>
                    <div className='right-panel'>
                        <p>Want to hear my semi-seasonal updates?</p>
                        <p>Join the mailing (wait)list <a href='https://google.com'>here</a></p>
                    </div>
                </div>

                <div className='panel'>
                    <div className='left-panel'>
                        <h2>&lt;Photography&gt;</h2>
                    </div>
                    <div className='right-panel'>
                        <p>Dark Forest Photo</p>
                        <p>@<a href='https://www.instagram.com/darkforestphoto/'>darkforestphoto</a></p>
                        <p>message me on instagram for inquiries & shoots</p>
                    </div>
                </div>

                <div className='panel'>
                    <div className='left-panel'>
                        <p>designed, developed, and implemented by</p>
                        <p>© Samuel Chan 2025</p>
                    </div>
                    <div className="right-panel">
                        &lt;/&gt; MIT License
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Contact;