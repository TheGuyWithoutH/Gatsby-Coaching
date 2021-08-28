import React, {Component} from 'react';
import {Chrono} from "react-chrono";

const items = [{
                    title: "May 1940",
                    cardTitle: "Dunkirk",
                    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
                    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
                    media: {
                        type: "IMAGE",
                        source: {
                            url: "http://someurl/image.jpg"
                        }
                    }
                }, {
                    title: "May 1940",
                    cardTitle: "Dunkirk",
                    cardSubtitle:"Men of the British Expeditionary Force (BEF) wade out to..",
                    cardDetailedText: "Men of the British Expeditionary Force (BEF) wade out to..",
                    media: {
                        type: "IMAGE",
                        source: {
                            url: "http://someurl/image.jpg"
                        }
                    }
                }];

class TimelineElement extends Component {

    render() {
        return (
            <div style={{ width: "100%", height: "100%"}}>
                <Chrono items={items} scrollable />
            </div>
        );
    }
}

export default TimelineElement;