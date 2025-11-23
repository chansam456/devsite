import React from "react";
import WorkPosition from './WorkPosition';

function Experience(): React.ReactElement {
    return(
        <div className="grid">
            <div className="left-panel">
                <h1>Experience</h1>
                <WorkPosition title='University of Washington' dates='Sept 2025 - present' heading='Computer Science, Honors Program' />
                <WorkPosition title='Data Analytics Extern' dates='May - June 2025' heading='Beats by Dre, Extern' />
                <WorkPosition title='Physics and Mathematics Tutor' dates='Jan 2024 - present' heading='University of Washington; Green River College' />
            </div>
        </div>
    );
}

export default Experience;