import React from 'react';
import firehouse from '../photo-video/firehouse.jpg'

function Home(): React.ReactElement {
    return(
        <div className='grid'>
            <div className='left-panel'>
                <h1>Samuel Chan</h1>
                <p>Making ideas happen through teamwork, leadership, and clarity of thought.</p>
                <p>Seattle, WA</p>
            </div>
            <div className='right-panel'>
                <img className='w-1/2 h-auto' src={firehouse} alt='Stained Glass at the Pennsylvania Firehouse' />
            </div>
        </div>
    );
}

export default Home;