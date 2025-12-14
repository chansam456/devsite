import React from 'react';
import useLightMode from './useLightMode';

export default function Footbar(): React.ReactElement {
    const [lightMode, setLightMode] = useLightMode();

    return(
        <div className='footbar'>
            <div className='footbar-options'>
                <button onClick={() => setLightMode(false)}>LUNAR (DARK)</button>
                {/*<button onClick={() => setLightMode(true)}>SOLAR (LIGHT)</button>*/}
            </div>
                
            <div className='footbar-info'>
                <div>EN</div>
                <div>UTF-8</div>
            </div>
        </div>
    );
}