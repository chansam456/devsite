import React from 'react';

export default function Footbar(): React.ReactElement {
    return(
        <div className='footbar'>
            <div className='footbar-options'>
                <div>SOLAR (DARK)</div>
                <div>LUNAR (LIGHT)</div>
            </div>
                
            <div className='footbar-info'>
                <div>EN</div>
                <div>UTF-8</div>
            </div>
        </div>
    );
}