import React from 'react';

interface TooltipProps {
    text: string;
    children: React.ReactNode;
}

export default function CursorTooltip({ text, children }: TooltipProps): React.ReactElement {
    const [isVisible, setIsVisible] = React.useState(false);
    const [coords, setCoords] = React.useState({ x: 0, y: 0 });
    //const [quadrant, setQuadrant] = React.useState({ x: 'left', y: 'top'});

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { clientX, clientY } = e;
        setCoords({x: clientX, y: clientY});
        
        //assess quadrant of mouse 
        //const XQuad = clientX > window.innerWidth / 2 ? 'right' : 'left';
        //const YQuad = clientY > window.innerHeight / 2 ? 'bottom' : 'top';

        //setQuadrant({x: XQuad, y: YQuad});
    };

    return(
        <div className='tooltipOuterContainer inline-flex'
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onMouseMove={handleMouseMove}>
            {children}
            {isVisible && (<div className='tooltipInnerContainer fixed z-[500] pointer-events-none' 
            style={{
                // positioning the tooltip @ cursor location
                left: coords.x,
                top: coords.y
            }}>
                {text}
            </div>)}
        </div>
    );
}