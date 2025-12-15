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

    const lastCoords = React.useRef({ x: 0, y: 0 });
    const rafRef = React.useRef(0); // request animation frame (raf)

    const tooltipRef = React.useRef<HTMLDivElement>(null);

    const updatePosition = () => { 
        // Directly update the DOM node's style for faster movement
        if (tooltipRef.current) {
            const { x, y } = lastCoords.current;
            tooltipRef.current.style.transform = `translate(${x}px, ${y}px)`;
        }
        rafRef.current = 0;
    }

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        lastCoords.current = { x: e.clientX, y: e.clientY };

        if (!rafRef.current) {
            rafRef.current = requestAnimationFrame(updatePosition);
        }
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
            <div ref={tooltipRef} className='tooltipInnerContainer fixed z-[1500] pointer-events-none w-fit' 
            style={{
                // positioning the tooltip @ cursor location
                left: coords.x,
                top: coords.y
                //transform: translate()
            }}>
                {text}
            </div>,
            // render direct to body
            document.body)}
        </div>
    );
}