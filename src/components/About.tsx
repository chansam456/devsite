import React from 'react';

function About(): React.ReactElement {
    return(
        <div className='panel'>
            <div className='left-panel'>
                <h1>&lt;About&gt;</h1>
                <p className='para'>I'm a full-stack developer who is never afraid to go back to the drawing board, 
                and passionate about taking the wildest ideas from 0 to 1 (or 3). While I'm an 
                experienced leader and communicator, I also present myself as an active teammate 
                who is more than happy to lend my technical (and non-technical) expertise to my 
                colleagues, classmates, and fellow creators.
                </p>
            </div>
            <div className='right-panel'>
                [Right panel contains a picture which should stay until this page passes when scrolling]
            </div>
        </div>
    );
}

export default About;