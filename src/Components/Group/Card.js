import React, {Component} from 'react';
import '../../styles/Card.css'

class Card extends Component {

    constructor(props) {
        super(props);

        if (typeof this.props.settings === undefined) {
            throw new Error("no data for card");
        }
    }

    render() {
        const settings = this.props.settings;
        return (
            <div className="card-container">
                <img src={settings.imgUrl} className="profile-img"/>
                <div className="infos">
                    <h1 className="name"><strong>{settings.name}</strong><br/>{settings.surname}</h1>
                    <h1 className="age">{settings.age}</h1>
                </div>
                <div className="description">
                    <p className="origin">{settings.origin}</p>
                    <p className="description-content">{settings.description}</p>
                    <div className="hobbys">
                        {settings.hobbys.slice(0, 4).map((item) => (
                            <img src={item}/>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;