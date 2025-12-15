import React from 'react';

export default function Contact(): React.ReactElement {
    return (
        <div className='main contact'>
            <div className='contact-list'>
                <div className='contact-entry'>
                    <div className='contact-title'>Contact&lt;?&gt;</div>
                    <div className='contact-desc'>
                        Samuel Chan<br/>
                        samch000 [at] cs [dot] uw [dot] edu
                    </div>
                </div>

                <div className='contact-entry'>
                    <div className='contact-title'>Mailing List</div>
                    <div className='contact-desc'>
                        Want to hear my semi-seasonal updates?<br/>
                        <a href='mailto:samch000@uw.edu'>Join the mailing (wait)list here</a>
                    </div>
                </div>

                <div className='contact-entry'>
                    <div className='contact-title'>Photography</div>
                    <div className='contact-desc'>
                        Dark Forest Photo<br/>
                        <a href='https://www.instagram.com/darkforestphoto/'>@darkforestphoto</a><br/>
                        Contact via instagram for inquiries & shoots
                    </div>
                </div>

                <div className='contact-entry'>
                    <div className='copyright-title'>
                        a <a href='https://www.github.com/chansam456'>Sam Chan</a> production
                        &copy; 2025
                    </div>
                    <div className='copyright-desc'>
                        &lt;/&gt; Code, inspiriation, design credits, and implementation
                    </div>
                </div>
            </div>
        </div>
    );
}