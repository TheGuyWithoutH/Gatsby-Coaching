import React from 'react';
import {Carousel} from "../Components/Group/Carousel";
import '../styles/Group.css'

function Group(props) {
    return (
        <div className="CardDisplay">
            <h1 className="title">Bienvenue dans Ton <strong>Groupe De Coaching</strong></h1>
            <Carousel/>
        </div>
    );
}

export default Group;