import React, {PureComponent} from 'react';
import ReactPlayer from 'react-player'
import '../../styles/Home.css'
import logo from '../../ressources/LOGO COACHING IC FOND BLANC.png'
import scrollImg from '../../ressources/Nav.png'
import group from '../../ressources/Team spirit-pana.svg'
import eventLogo from '../../ressources/Calendar-amico.svg'
import {Link} from "gatsby";
import EventCard from "../Events/EventCard";

class Home extends PureComponent {
    render() {
        return (
            <div className="HomeContainer">
                <div className="parallax">
                    <div className="parallax__group header-group">
                        <div className="bg-image parallax__layer"/>
                        <div className="Headers parallax__layer">
                            <div className="Title">
                                <img src={logo} className="logo"/>
                                <h1 className="welcome-txt rotate">Bienvenue au<br/>Coaching</h1>
                                <a href="#video">
                                    <img src={scrollImg} className="nav"/>
                                </a>
                            </div>
                            <a name="video"/>
                            <div className="Video">
                                <div className="player">
                                    <ReactPlayer
                                        url="https://youtu.be/Lv66S5FoAZ8"
                                        width="100%"
                                        height="100%"
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="parallax__group">
                        <div className="Group">
                            <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
                                <p className="txt">Salut à toi jeune coaché ! Bienvenue à l’
                                    <a href="https://www.epfl.ch/" style={{fontFamily: 'Assistant', fontWeight: 'bold', color: 'red', margin: 0, display: 'inline', textDecoration: 'none'}}>EPFL </a>
                                    ! Nous sommes ravis de t’accueillir pour ta première année dans cette merveilleuse école. Laisse-moi te parler du
                                    <p style={{fontFamily: 'Coming Soon', color: '#6E12E2', margin: 0, display: 'inline'}}> COACHING </p>
                                    : nous sommes là pour t’aider dans tes premiers pas ici, afin de rencontrer du monde, de ne pas te sentir perdu mais au contraire chez toi. Pour cela, nous allons régulièrement organiser des
                                    <p style={{fontWeight: 500, margin: 0, display: 'inline'}}> évènements </p>
                                    auquels tu es libre de participer, avec ton groupe de coaching ou bien avec la section entière.
                                    <br/>
                                    <br/>
                                    Nous avons hâte de te rencontrer ! En attendant, découvre ton groupe en cliquant à droite...</p>
                            </div>
                            <div style={{flex: 1, display: 'flex', justifyContent: 'center'}}>
                                <Link to='/group' style={{textDecoration: 'none'}}>
                                    <div className="button">
                                        <div style={{flex: 3, display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 0, width: '100%'}}>
                                            <img src={group} className="groupIco"/>
                                        </div>
                                        <p className="groupTxt">Découvre<br/>Ton Groupe</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="parallax__group">
                        <div className="Timeline">
                            <div className="eventIllustration">
                                <img src={eventLogo} className="eventLogo"/>
                            </div>
                            <div className="lastEvent">
                                <h1 className="eventText">Prochain Evénement</h1>
                                <EventCard date="17 SEP" image="https://coaching.epfl.ch/wp-content/uploads/2019/11/71701891_2829026670458618_6957538950105792512_o.jpg"/>
                                <a href="/timeline" style={{fontFamily: "Lato", fontSize: '4vmin', fontWeight: 'lighter', textDecoration: 'none', color:'#8338EC'}}>/> Voir tous les évènements   👈</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Home.propTypes = {};

export default Home;