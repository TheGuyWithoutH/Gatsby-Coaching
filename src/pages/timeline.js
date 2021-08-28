import React, {Component} from 'react';
import TimelineElement from "../Components/Home/TimelineElement";

class Timeline extends Component {
    render() {
        return (
            <div style={{minWidth: '100%', minHeight: '100vh'}}>
                <TimelineElement/>
            </div>
        );
    }
}

export default Timeline;