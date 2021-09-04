import React, {Component} from 'react';
import '../../styles/Card.css'

const defaultBio = "Coucou ! Je n'ai pas fait de bio mais j'ai hâte de te rencontrer";

class Card extends Component {

    constructor(props) {
        super(props);

        if (typeof this.props.settings === undefined) {
            throw new Error("no data for card");
        }
    }

    _areThereHobbies = (settings) => {
        if(settings.hobbies){
            const hobbiesArray = settings.hobbies.split('-')
            return hobbiesArray.slice(0, 4).map((item) => (<img src={item}/>))
        }
    }

    render() {
        const settings = this.props.settings;
        console.log(settings.picture)
        return (
            <div className="card-container">
                <img src={settings.picture || settings.imgUrl || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} className="profile-img"/>
                <div className="infos">
                    <h1 className="name"><strong>{settings.name}</strong><br/>{settings.surname}</h1>
                    <h1 className="age">{settings.age}</h1>
                </div>
                <div className="description">
                    <p className="origin">{settings.country || "Mystère..."}</p>
                    <p className="description-content">{settings.bio || defaultBio}</p>
                    <div className="hobbys">
                        {this._areThereHobbies(settings)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;