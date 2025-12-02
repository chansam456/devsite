import React from 'react';
import ReactDOM from 'react-dom';

interface TooltipProps {
    text: string;
    children: React.ReactNode;
    className: string
}

export default function CursorTooltip({ text, children, className }: TooltipProps): React.ReactElement {
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
        <div className={`tooltipOuterContainer inline-flex ${className || ''}`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onMouseMove={handleMouseMove}>
            {children}
            {isVisible && ReactDOM.createPortal(
            <div className='tooltipInnerContainer fixed z-[1500] pointer-events-none w-fit' 
            style={{
                // positioning the tooltip @ cursor location
                left: coords.x + 10,
                top: coords.y + 10
            }}>
                {text}
            </div>,
            // render direct to body
            document.body)}
        </div>
    );
}