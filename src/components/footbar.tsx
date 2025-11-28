import React from 'react';

export default function Footbar(): React.ReactElement {
    return(
        <div className='footbar'>
            <div className='footbar-options'>
                <div>SOLAR</div>
                <div>LUNAR</div>
            </div>
                
            <div className='footbar-info'>
                <div>EN</div>
                <div>UTF-8</div>
            </div>
        </div>
    );
}