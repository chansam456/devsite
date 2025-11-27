import React from 'react';

export default function Footbar(): React.ReactElement {
    return(
        <div className='footbar'>
            <div className='footbar-options'>
                <div>DARK</div>
                <div>LIGHT</div>
                <div>COLORFUL</div>
            </div>
                
            <div className='footbar-info'>
                <div>EN</div>
                <div>UTF-8</div>
            </div>
        </div>
    );
}