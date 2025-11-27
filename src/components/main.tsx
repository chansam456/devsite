import React from 'react';

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
                <div className='project-entry'>
                    <div className='project-title'>Project One</div>
                    <div className='project-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque necessitatibus culpa itaque delectus eveniet obcaecati tempora, nisi optio! Nihil eius minus vitae ducimus ullam fugiat minima odio libero a aut!</div>
                </div>

                <div className='project-entry'>
                    <div className='project-title'>Project Two</div>
                    <div className='project-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque necessitatibus culpa itaque delectus eveniet obcaecati tempora, nisi optio! Nihil eius minus vitae ducimus ullam fugiat minima odio libero a aut!</div>
                </div>

                <div className='project-entry'>
                    <div className='project-title'>Project Three</div>
                    <div className='project-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque necessitatibus culpa itaque delectus eveniet obcaecati tempora, nisi optio! Nihil eius minus vitae ducimus ullam fugiat minima odio libero a aut!</div>
                </div>

                <div className='project-entry'>
                    <div className='project-title'>Project Four</div>
                    <div className='project-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque necessitatibus culpa itaque delectus eveniet obcaecati tempora, nisi optio! Nihil eius minus vitae ducimus ullam fugiat minima odio libero a aut!</div>
                </div>

                <div className='project-entry'>
                    <div className='project-title'>Project Five</div>
                    <div className='project-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque necessitatibus culpa itaque delectus eveniet obcaecati tempora, nisi optio! Nihil eius minus vitae ducimus ullam fugiat minima odio libero a aut!</div>
                </div>
            </div>
        </div>
    );
}