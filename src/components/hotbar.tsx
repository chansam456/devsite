import React from 'react';

export default function Hotbar(): React.ReactElement {
    return(
        <div className='hotbar'>
            <a className='hotbar-name' href='https://google.com'>samchan@host:/welcometothematrix/</a>
            <div className='links'>
                <a href='https://www.linkedin.com/in/samuelmchan/'>@linkedin</a>
                <a href='https://github.com/chansam456'>@github</a>
                <a href='https://www.instagram.com/chansam000/'>@instagram</a>
            </div>
        </div>
    );
}