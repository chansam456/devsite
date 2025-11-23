import React from "react";

function Contact(): React.ReactElement {
    return(
        <footer>
            <div className='grid'>
                <h1 className='left-panel'>Contact</h1>
                <div className='right-panel'>
                    <p>Samuel Chan</p>
                    <p>samch000 [at] cs [dot] washington [dot] edu</p>
                    <p className='link'>UW Honors Portfolio</p>
                </div>
            </div>

            <div className='grid'>
                <h1 className='left-panel'>Mailing List</h1>
                <div className='right-panel'>
                    <p>Want to hear my semi-seasonal updates?</p>
                    <p>Join the mailing (wait)list <p className='link'>here</p></p>
                </div>
            </div>

            <div className='grid'>
                <div>
                    <h1>Photography</h1>
                </div>
                <div className='right-panel'>
                    <p>Dark Forest Photo</p>
                    <p>@<p className='link'>darkforestphoto</p></p>
                    <p>message me on instagram for inquiries & shoots</p>
                </div>
            </div>

            <div className='grid'>
                <div className='left-panel'>
                    <p>designed, developed, and implemented by</p>
                    <p>© Samuel Chan 2025</p>
                </div>
                <div>
                    &lt;/&rt; Code is not public but my process is documented here
                </div>
            </div>
        </footer>
    );
}

export default Contact;