import React from 'react';
import useDarkMode from './useDarkMode';

export default function Footbar(): React.ReactElement {
    const [darkEnabled, setDarkEnabled] = useDarkMode();

    return(
        <div className='footbar'>
            <div className='footbar-options'>
                <button onClick={() => setDarkEnabled(true)}>SOLAR (DARK)</button>
                <button onClick={() => setDarkEnabled(false)}>LUNAR (LIGHT)</button>
            </div>
                
            <div className='footbar-info'>
                <div>EN</div>
                <div>UTF-8</div>
            </div>
        </div>
    );
}