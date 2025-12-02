import React from 'react';

export default function Contact(): React.ReactElement {
    return (
        <div className='main contact'>
            <div className='contact-list'>
                <div className='contact-entry'>
                    <div className='contact-title'>Contact&lt;?&gt;</div>
                    <div className='contact-desc'>
                        Samuel Chan<br/>
                        samch000 [at] cs [dot] uw [dot] edu<br/>
                        <a title="(Coming soon...)" href='https://github.com/chansam456'>@UWHonors Portfolio</a>
                    </div>
                </div>

                <div className='contact-entry'>
                    <div className='contact-title'>Mailing List</div>
                    <div className='contact-desc'>
                        Want to hear my semi-seasonal updates?<br/>
                        <a href='https://google.com'>Join the mailing (wait)list here</a>
                    </div>
                </div>

                <div className='contact-entry'>
                    <div className='contact-title'>Photography</div>
                    <div className='contact-desc'>
                        Dark Forest Photo<br/>
                        <a href='https://google.com'>@darkforestphoto</a><br/>
                        Contact via instagram for inquiries & shoots
                    </div>
                </div>

                <div className='contact-entry'>
                    <div className='copyright-title'>
                        designed, developed, and implemented<br/>
                        by <a href='https://google.com'>@Samuel Chan 2025 &copy;</a>
                    </div>
                    <div className='copyright-desc'>
                        &lt;/&gt; Code, inspiriation, design credits, and implementation
                    </div>
                </div>
            </div>
        </div>
    );
}