import React from 'react';

interface workPositionProps {
    title: string;
    dates: string;
    heading: string;
}

function WorkPosition(props: workPositionProps): React.ReactElement {
    return(
        <>
            <div className='right-side'>
                <p>{props.title}</p>
                <p>{props.heading}</p>
            </div>
            <div className='left-side'>
                <p>{dates}</p>
            </div>
        </>
    );
}

export default WorkPosition;