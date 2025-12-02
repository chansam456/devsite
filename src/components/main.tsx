import React from 'react';
import CursorTooltipElem from './CursorTooltipElem';

export default function Main(): React.ReactElement {
    return (
        <div className='main'>
            <div className='about'>
                <div className='cmd'>&gt; whoami</div>
                <h1>Samuel Chan</h1>
                <div className='bio'>
                    // making ideas happen through intention, by design <br/>
                    // tea drinker, photographer, and math enjoyer
                </div>
            </div>

            <div className='project-list'>
                <CursorTooltipElem text='Hi this is my project!' className='project-entry'>
                    <div className='project-date'>September 2025 - Present</div>
                    <div className='project-title'>Husky Coding Project: Studi</div>
                    <div className='project-desc'>Studi unlocks the magic of UW's campus by sorting you into the perfect study spot; the 
                        spellbinding atmosphere of Suzzallo or a hidden nook, whichever shall matches your vibe. Let our advanced algorithm 
                        be your Sorting Hat, or use Professor Trewlaney's Crystal Ball to divine your next destination.</div>
                </CursorTooltipElem>

                <CursorTooltipElem text='Hi this is my project!' className='project-entry'>
                    <div className='project-date'>September 2025</div>
                    <div className='project-title'>Project Two</div>
                    <div className='project-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque necessitatibus culpa itaque delectus eveniet obcaecati tempora, nisi optio! Nihil eius minus vitae ducimus ullam fugiat minima odio libero a aut!</div>
                </CursorTooltipElem>

                <CursorTooltipElem text='Hi this is my project!' className='project-entry'>
                    <div className='project-date'>September 2025</div>
                    <div className='project-title'>Project Three</div>
                    <div className='project-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque necessitatibus culpa itaque delectus eveniet obcaecati tempora, nisi optio! Nihil eius minus vitae ducimus ullam fugiat minima odio libero a aut!</div>
                </CursorTooltipElem>
            </div>
        </div>
    );
}