import React from 'react';
import firehouse from '../photo-video/firehouse.jpg'

function Home(): React.ReactElement {
    return(
        <div className='panel'>
            <div className='left-panel'>
                <h1>&lt;Samuel Chan&gt;</h1>
                <p>Making ideas happen through teamwork, leadership, and clarity of thought.</p>
            </div>
            <div className='right-panel'>
                <img src={firehouse} alt='Stained Glass at the Pennsylvania Firehouse' />
            </div>
        </div>
    );
}

export default Home;