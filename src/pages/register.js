import React, {Component} from 'react';
import '../styles/Register.css'
import logo from "../ressources/LOGO COACHING IC FOND BLANC.png";
import {Link} from "gatsby";

class Register extends Component {
    render() {
        return (
            <div className="content">
                <div className="background-element"/>
                <div className="intro-txt">
                    <div style={{width: '100%', display:'flex', flexDirection:'row', alignItems: 'center', justifyContent: 'space-evenly'}}>
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
                               accept="image/png, image/jpeg"/>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" className="profile-picture"/>
                    </div>
                    <div className="extra-infos">
                        <div className="age">
                            <h2>Âge *</h2>
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

                    </div>
                    <div className="alcohol-container">
                        <h2>Alcool</h2>

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