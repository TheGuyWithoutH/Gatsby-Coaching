import React, {Component} from 'react';
import '../../styles/EventCard.css'

class EventCard extends Component {

    constructor(props) {
        super(props);

        if (typeof props.date == null || typeof props.image == null) {
            throw new Error('No data for event card');
        }
    }

    render() {
        return (
            <div className="card-event">
                <p className="card-event-text">{this.props.date.split(" ").map(e => <p style={{margin: 0, textAlign: 'center'}}>{e}</p>)}</p>
            </div>
        );
    }
}

export default EventCard;