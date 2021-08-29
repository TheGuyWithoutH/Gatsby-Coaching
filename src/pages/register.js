import React, {Component} from 'react';
import '../styles/Register.css'
import logo from "../ressources/LOGO COACHING IC FOND BLANC.png";

class Register extends Component {



    componentDidMount() {
        const input = document.querySelectorAll('.avatar');

        const picture = input.item(0).nextElementSibling.children.item(0);

        input.item(0).addEventListener( 'change', function( e ) {
            if (this.files && this.files[0]) {
                const reader = new FileReader();

                reader.onload = function (e) {
                    picture.src = reader.result;
                }

                reader.readAsDataURL(this.files[0]);
            }
        });
    }

    render() {
        return (
            <div className="content">
                <div className="background-element"/>
                <div className="intro-txt">
                    <div className="title-container">
                        <h1 className="title">Salut toi 🙃</h1>
                        <img src={logo} className="logo"/>
                    </div>
                    <p className="explanation">Avant d'accéder pour la première fois au site de ton groupe de coaching, on aimerait en apprendre
                        un peu plus sur toi. Loin de nous l'idée de te voler des informations pour les vendre 😈, elles nous serviront
                     pour une petite présentation de qui tu est sur le site, et aussi à organiser un peu nos prochains évènements.
                    Hormis les champs obligatoires (*), tu es libre de compléter ou non.<br/>Merci d'avance 😁</p>
                </div>
                <form className="form">
                    <div className="id-form">
                        <div className="name">
                            <h2>Nom *</h2>
                            <input type="text" className="surname-input" placeholder="Nom"/>
                            <h2>Prénom *</h2>
                            <input type="text" className="name-input" placeholder="Prénom"/>
                        </div>
                        <input type="file"
                               id="avatar" name="avatar"
                               accept="image/" className="avatar"/>
                        <label htmlFor="avatar">
                            <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="profile-picture"/>
                        </label>
                    </div>
                    <div className="extra-infos">
                        <div className="age">
                            <h2>Age *</h2>
                            <input type="text" className="age-input" placeholder="Âge"/>
                        </div>
                        <div className="country">
                            <h2>Pays</h2>
                            <input type="text" className="country-input" placeholder="Pays"/>
                        </div>
                    </div>
                    <div className="bio-container">
                        <h2>Bio</h2>
                        <textarea type="text" className="bio-input" placeholder="Décrit toi un peu..."/>
                    </div>
                    <div className="hobbys-container">
                        <h2>Hobbys</h2>
                        <select name="cars" id="cars" multiple>
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
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
                        <textarea className="message-input" placeholder="Ton message" />
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