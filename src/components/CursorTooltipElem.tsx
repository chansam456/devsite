import React from 'react';
import ReactDOM from 'react-dom';

interface TooltipProps {
    text: string;
    children: React.ReactNode;
    className: string
}

export default function CursorTooltipElem({ text, children, className }: TooltipProps): React.ReactElement {
    const [isVisible, setIsVisible] = React.useState(false);
    const [coords, setCoords] = React.useState({ x: 0, y: 0 });

    const lastCoords = React.useRef({ x: 0, y: 0 }); // performance boosting version
    const rafRef = React.useRef(0); // request animation frame 

    // deprecated quadrant code:
    // const [quadrant, setQuadrant] = React.useState({ x: 'left', y: 'top'});

    const updatePosition = () => {
        setCoords(lastCoords.current);
        rafRef.current = 0;
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        lastCoords.current = { x: e.clientX, y: e.clientY };

        if (!rafRef.current) {
            rafRef.current = requestAnimationFrame(updatePosition);
        }

        // deprecated quadrant code: 
        // const XQuad = clientX > window.innerWidth / 2 ? 'right' : 'left';
        // const YQuad = clientY > window.innerHeight / 2 ? 'bottom' : 'top';
        // setQuadrant({x: XQuad, y: YQuad});
    };

    React.useEffect(() => {
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

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