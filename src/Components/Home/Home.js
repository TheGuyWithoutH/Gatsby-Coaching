import React, {PureComponent} from 'react';
import ReactPlayer from 'react-player'
import PropTypes from 'prop-types';
import '../../styles/Home.css'
import logo from '../../ressources/LOGO COACHING IC FOND BLANC.png'
import scrollImg from '../../ressources/Nav.png'
import group from '../../ressources/GroupeLogo.png'

class Home extends PureComponent {
    render() {
        return (
            <div className="HomeContainer">
                <div className="Headers">
                    <div className="Title">
                        <img src={logo} className="logo"/>
                        <h1 className="welcome-txt rotate">Bienvenue au Coaching</h1>
                        <img src={scrollImg} className="nav"/>
                    </div>

                    <div className="Video">
                        <ReactPlayer
                            url="https://www.youtube.com/watch?v=nzaqkMnobqA"
                            width="75vw"
                            height="75vh"
                        />
                        <img src={scrollImg} className="nav"/>
                    </div>
                </div>
                <div className="Menu">
                    <div className="Group">
                        <p className="txt">Salut à toi jeune coaché ! Bienvenue à l’EPFL ! Nous sommes ravis de t’accueillir pour ta première année dans cette merveilleuse école. Laisse-moi te parler du coaching : nous sommes là pour t’aider dans tes premiers pas ici, afin de rencontrer du monde, de ne pas te sentir perdu mais au contraire chez toi. Pour cela, nous allons régulièrement organiser des évènements auquels tu es libre de participer, avec ton groupe de coaching ou bien avec la section entière.

                            Nous avons hâte de te rencontrer ! En attendant, découvre ton groupe en cliquant à droite...</p>
                        <a className="button">
                            <img src={group}/>
                        </a>

                    </div>
                </div>

            </div>
        );
    }
}

Home.propTypes = {};

export default Home;