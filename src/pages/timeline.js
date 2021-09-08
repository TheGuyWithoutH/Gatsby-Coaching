import React, {Component} from 'react';
import '../styles/timeline.css'
import TimelineElement from "../Components/Home/TimelineElement";

class Timeline extends Component {
    render() {
        return (
            <div className="content-timeline">
                <h1 className="title-timeline">Evènements Coaching</h1>
                <TimelineElement/>
            </div>
        );
    }
}

export default Timeline;