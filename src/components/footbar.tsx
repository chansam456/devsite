import React from 'react';
import useSolarMode from './useSolarMode';

export default function Footbar(): React.ReactElement {
    const [darkEnabled, setDarkEnabled] = useSolarMode();

    return(
        <div className='footbar'>
            <div className='footbar-options'>
                <button onClick={() => setDarkEnabled(false)}>LUNAR (DARK)</button>
                <button onClick={() => setDarkEnabled(true)}>SOLAR (LIGHT)</button>
            </div>
                
            <div className='footbar-info'>
                <div>EN</div>
                <div>UTF-8</div>
            </div>
        </div>
    );
}