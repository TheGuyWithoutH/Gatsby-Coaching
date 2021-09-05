import React, {Component} from 'react';
import '../../styles/Card.css';

class Hobby extends Component {

    constructor(props) {
        super(props);

        if (typeof this.props.hobby === undefined) {
            throw new Error("no hobby");
        }
    }

    render() {
        let image = "https://www.coaching.ugobalducci.fr/icons/hobbies/";

        switch (this.props.hobby) {
            case 'anime':
                image += "ninja.svg";
                break;
            case 'assos':
                image += "interaction.svg";
                break;
            case 'basket':
                image += "basketball-ball.svg";
                break;
            case 'bourse':
                image += "stock.svg";
                break;
            case 'chant':
                image += "karaoke.svg";
                break;
            case 'code':
                image += "coding.png";
                break;
            case 'cuisine':
                image += "cooking.svg";
                break;
            case 'danse':
                image += "dancer.svg";
                break;
            case 'ecriture':
                image += "writing.svg";
                break;
            case 'foot':
                image += "football-player.svg";
                break;
            case 'jeux':
                image += "board-game.svg";
                break;
            case 'jeux-videos':
                image += "gamepad.svg";
                break;
            case 'livre':
                image += "open-book.svg";
                break;
            case 'maths':
                image += "think.svg";
                break;
            case 'mode':
                image += "fashion-design.svg";
                break;
            case 'musique':
                image += "music.svg";
                break;
            case 'plage':
                image += "parasol.svg";
                break
            case 'raquette':
                image += "tennis.svg";
                break;
            case 'ski':
                image += "skiing.svg";
                break;
            case 'theatre':
                image += "theater.svg";
                break;
            case 'tv':
                image += "popcorn.png";
                break;
            case 'volley':
                image += "volleyball.svg";
                break;
        }

        return (
            <div className="icon">
                <img src={image} className="icon-img"/>
            </div>
        );
    }
}

export default Hobby;