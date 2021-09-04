import React, {Component} from 'react';
import fetch from "node-fetch";
import '../styles/Register.css'
import logo from "../ressources/LOGO COACHING IC FOND BLANC.png";

const _alreadyAuth = (uuid) => {

    const url = "https://www.theguywithouth.fr/coaching/db-query/auth-register.php?uuid=" + uuid;
    const data = {
        method: 'GET',
        headers : {'Accept': 'application/json', 'Content-type': 'application/json'},
    }

    fetch(url, data).then((response) => {
        if (response.ok) {
            return response.json();
        }
    }, networkError => {
        console.log(networkError)
        window.location.replace("https://www.coaching.ugobalducci.fr");
    }).then(jsonResponse => {
        if (!jsonResponse.authorized) {
            window.location.replace("https://www.coaching.ugobalducci.fr");
        }
    })
}

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            canRegister : false
        }
    }

    componentDidMount() {
        const input = document.querySelectorAll('.avatar');

        const output = document.querySelectorAll('.avatar-url');

        const picture = input.item(0).nextElementSibling.children.item(0);

        input.item(0).addEventListener( 'change', function( e ) {
            if (this.files && this.files[0]) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    const result = reader.result;
                    picture.src = result;
                }
                reader.readAsDataURL(this.files[0]);
            }
        });

        const params = new URLSearchParams(document.location.search.substring(1));
        const uid = params.get("id");

        console.log("got here");

        if(uid === null) {
            console.log("no uid")
            window.location.replace("https://www.coaching.ugobalducci.fr");
        } else {
            _alreadyAuth(uid);
            this.setState({uid: uid});
        }
    }

    render() {
        return (
            <div className="content">
                <div className="background-element"/>
                <div className="intro-txt">
                    <div className="title-container">
                        <h1 className="title-register">Salut toi 🙃</h1>
                        <img src={logo} className="logo-register"/>
                    </div>
                    <p className="explanation">Avant d'accéder pour la première fois au site de ton groupe de coaching, on aimerait en apprendre
                        un peu plus sur toi. Loin de nous l'idée de te voler des informations pour les vendre 😈, elles nous serviront
                        pour une petite présentation de qui tu est sur le site, et aussi à organiser un peu nos prochains évènements.
                        Hormis les champs obligatoires (*), tu es libre de compléter ou non.<br/>Merci d'avance 😁</p>
                </div>
                <form className="form" action="https://www.theguywithouth.fr/coaching/db-query/user-data.php" method="post" encType="multipart/form-data">
                    <input type="text" name="uuid" value={this.state.uid} style={{display: 'none'}}/>
                    <div className="id-form">
                        <div className="name">
                            <h2>Nom *</h2>
                            <input type="text" name="surname" className="surname-input" placeholder="Nom" required/>
                            <h2>Prénom *</h2>
                            <input type="text" name="name" className="name-input" placeholder="Prénom" required/>
                        </div>
                        <input type="text" id="avatar-url" name="avatar-url" hidden={true}/>
                        <input type="file" id="avatar" name="avatar" accept="image/" className="avatar"/>
                        <label htmlFor="avatar">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="profile-picture"/>
                        </label>
                    </div>
                    <div className="extra-infos">
                        <div className="age">
                            <h2>Age *</h2>
                            <input type="text" name="age" className="age-input" placeholder="Âge" required/>
                        </div>
                        <div className="country">
                            <h2>Pays</h2>
                            <input type="text" name="country" className="country-input" placeholder="Pays"/>
                        </div>
                    </div>
                    <div className="bio-container">
                        <h2>Bio</h2>
                        <textarea type="text" name="bio" className="bio-input" placeholder="Décrit toi un peu..."/>
                    </div>
                    <div className="hobbys-container">
                        <h2>Hobbys</h2>
                        <select name="hobbies[]" id="hobbies" multiple="MULTIPLE">
                            <option value="anime">Animes</option>
                            <option value="assos">Associations</option>
                            <option value="basket">Basketball</option>
                            <option value="bourse">Bourse</option>
                            <option value="chant">Chant</option>
                            <option value="code">Programmation, hacking...</option>
                            <option value="cuisine">Cuisine</option>
                            <option value="danse">Danse</option>
                            <option value="ecriture">Ecriture</option>
                            <option value="foot">Football</option>
                            <option value="jeux">Jeux de Rôle</option>
                            <option value="jeux">Jeux Vidéos</option>
                            <option value="livre">Livres</option>
                            <option value="maths">Maths</option>
                            <option value="mode">Mode</option>
                            <option value="musique">Musique</option>
                            <option value="plage">Plage</option>
                            <option value="raquette">Tennis (ou autre sport de raquette)</option>
                            <option value="ski">Ski</option>
                            <option value="theatre">Théâtre</option>
                            <option value="tv">Films et séries</option>
                            <option value="volley">Volleyball</option>
                        </select>
                    </div>
                    <div className="alcohol-container">
                        <h2>Alcool préféré</h2>
                        <div className="alcohol-form">
                            <input type="radio" id="nothing" name="alcohol" value="nothing"/>
                            <label htmlFor="nothing">
                                <span title="Pas d'alcool">
                                    <img src="https://image.flaticon.com/icons/png/512/4330/4330187.png" className="alcohol-icon"/>
                                </span>
                            </label>

                            <input type="radio" id="cocktail" name="alcohol" value="cocktail"/>
                            <label htmlFor="cocktail">
                                <span title="Cocktail">
                                    <img src="https://image.flaticon.com/icons/png/512/920/920539.png" className="alcohol-icon"/>
                                </span>
                            </label>

                            <input type="radio" id="wine" name="alcohol" value="wine"/>
                            <label htmlFor="wine">
                                <span title="Vin">
                                    <img src="https://image.flaticon.com/icons/png/512/4425/4425723.png" className="alcohol-icon"/>
                                </span>
                            </label>

                            <input type="radio" id="beer" name="alcohol" value="beer"/>
                            <label htmlFor="beer">
                                <span title="Bière">
                                    <img src="https://image.flaticon.com/icons/png/512/2884/2884841.png" className="alcohol-icon"/>
                                </span>
                            </label>

                            <input type="radio" id="shots" name="alcohol" value="shots"/>
                            <label htmlFor="shots">
                                <span title="Shots de Vodka...">
                                    <img src="https://image.flaticon.com/icons/png/512/1930/1930710.png" className="alcohol-icon"/>
                                </span>
                            </label>

                            <input type="radio" id="glass" name="alcohol" value="glass"/>
                            <label htmlFor="glass">
                                <span title="Whiskey, spiritueux ...">
                                    <img src="https://image.flaticon.com/icons/png/512/920/920521.png" className="alcohol-icon"/>
                                </span>
                            </label>
                        </div>

                    </div>
                    <div className="message-container">
                        <h2>Un petit message pour nous ?</h2>
                        <textarea className="message-input" name="message" placeholder="Ton message" />
                    </div>
                    <button type="submit" className="button-submit">
                        Envoyer à la CIA
                    </button>
                </form>
            </div>
        );
    }
}

export default Register;