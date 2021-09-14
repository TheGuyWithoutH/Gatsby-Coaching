import React, {Component} from 'react';
import '../styles/timeline.css'
import TimelineElement from "../Components/Home/TimelineElement";

class Timeline extends Component {
    render() {
        return (
            <div className="content-timeline">
                <h1 className="title-timeline">Evènements Coaching</h1>
                <p style={{fontSize: '5vmin', textAlign: 'center', fontFamily: 'Lato', fontWeight: 'bolder', color: '#8338EC'}}>Work in
                    Progress...</p>
            </div>
        );
    }
}

export default Timeline;