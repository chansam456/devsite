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
                <CursorTooltipElem text='[WIP!] Ask me about it :)' className='project-entry'>
                    <div className='project-prologue'>Project Manager, Frontend Dev.</div>
                    <div className='project-title'>Husky Coding Project: Studi</div>
                    <div className='project-desc'>Studi unlocks the magic of UW's campus by sorting you into the perfect study spot; the 
                        spellbinding atmosphere of Suzzallo or a hidden nook, whichever you shall seek. Let our advanced algorithm 
                        be your Sorting Hat, or use Professor Trewlaney's Crystal Ball to divine your next destination.</div>
                    <div className='project-stack'>Node.js, React, Tailwind CSS, Supabase</div>
                </CursorTooltipElem>

                <CursorTooltipElem text='[WIP!] Click me for Design Docs' className='project-entry'>
                    <div className='project-prologue'>Designer x Developer</div>
                    <div className='project-title'>Portfolio:<a className='ml-3' href='https://www.instagram.com/tai.jpeg'>tai.jpeg</a></div>
                    <div className='project-desc'>From Seattle to the ends of the earth, this portfolio serves as a vibrant passport 
                        to unfiltered international photography escapades. tai.jpeg captures the vibrance of each and every 
                        country, city, and journey.</div>
                    <div className='project-stack'>React, Vercel, Sanity, Scheduling Integrations</div>
                </CursorTooltipElem>
            </div>
        </div>
    );
}