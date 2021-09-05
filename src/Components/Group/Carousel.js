import React, { useEffect, useCallback, useState } from 'react';
import fetch from "node-fetch";
import '../../styles/Carousel.css'
import Card from "./Card";

const cardItems = [
    {
        uuid: 1,
        imgUrl: 'https://images.ctfassets.net/hrltx12pl8hq/3AnnkVqrlhrqb9hjlMBzKX/693a8e5d40b4b6c55a7673ca4c807eef/Girl-Stock?fit=fill&w=480&h=270',
        name: 'Jane',
        surname: 'Christie',
        age: '18',
        country: 'Française - Paris',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla. Etiam sed interdum est.',
        hobbies: 'kart-cinema-foot-code'
    },
    {
        uuid: 2,
        imgUrl: 'https://st4.depositphotos.com/12982378/23038/i/600/depositphotos_230382864-stock-photo-high-angle-view-of-attractive.jpg',
        name: 'Stéphanie',
        surname: 'Robert',
        age: '19',
        country: 'Française - Toulouse',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla. Etiam sed interdum est.',
        hobbies: 'kart-cinema-foot-code'
    },
    {
        uuid: 3,
        imgUrl: 'https://st.depositphotos.com/1011643/2013/i/600/depositphotos_20131051-stock-photo-african-college-boy-standing-outdoors.jpg',
        name: 'Baptiste',
        surname: 'Duchêne',
        age: '18',
        country: 'Français - Strasbourg',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla. Etiam sed interdum est.',
        hobbies: 'kart-cinema-foot-code'
    },
    {
        uuid: 4,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTymYmbvnevAjuMuO0dkCajzfsRuGkCWBty3w&usqp=CAU',
        name: 'Sebastien',
        surname: 'Ulrich',
        age: '22',
        country: 'Suisse - Bern',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla. Etiam sed interdum est.',
        hobbies: 'kart-cinema-foot-code'
    },
];

function determineClasses(indexes, cardIndex) {
    if (indexes.currentIndex === cardIndex) {
        return 'active';
    } else if (indexes.nextIndex === cardIndex) {
        return 'next';
    } else if (indexes.previousIndex === cardIndex) {
        return 'prev';
    }
    return 'inactive';
}


export const Carousel = () => {

    //Hooks functions

    const [indexes, setIndexes] = useState({
        previousIndex: 0,
        currentIndex: 0,
        nextIndex: 1
    });

    const [loaded, setLoaded] = useState({
        isLoaded: false,
        data: []
    });

    const handleDataFetch = () => {
        if(!loaded.isLoaded){
            fetch("https://www.theguywithouth.fr/coaching/db-query/user-data.php")
                .then(response => response.json())
                .then(data => {
                    /*console.log(data)*/
                    if(data.length < 3) data = data.concat(cardItems)
                    setLoaded({
                        isLoaded: true,
                        data: data
                    })
                })
        }
    }

    const handleCardTransitionRight = useCallback(() => {
        // If we've reached the end, start again from the first card,
        // but carry previous value over
        if (indexes.currentIndex >= cardItems.length - 1) {
            setIndexes({
                previousIndex: cardItems.length - 1,
                currentIndex: 0,
                nextIndex: 1,
            });
        } else {
            setIndexes((prevState) => ({
                previousIndex: prevState.currentIndex,
                currentIndex: prevState.currentIndex + 1,
                nextIndex: prevState.currentIndex + 2 === cardItems.length ? 0 : prevState.currentIndex + 2,
            }));
        }
        console.log(indexes.currentIndex)
    }, [indexes.currentIndex]);

    const handleCardTransitionLeft = useCallback(() => {
        // If we've reached the end, start again from the first card,
        // but carry previous value over
        if (indexes.currentIndex <= 0) {
            setIndexes({
                previousIndex: cardItems.length - 2,
                currentIndex: cardItems.length - 1,
                nextIndex: 0,
            });
        } else {
            setIndexes((prevState) => ({
                previousIndex: prevState.currentIndex - 2 < 0 ? cardItems.length - 1 : prevState.currentIndex - 2,
                currentIndex: prevState.currentIndex - 1,
                nextIndex: prevState.currentIndex,
            }));
        }
        console.log(indexes.currentIndex)
    }, [indexes.currentIndex]);


    //Component life

    handleDataFetch();

    return (
        <div className="container">
            <button onClick={handleCardTransitionLeft} className="prevButton"/>
            <ul className="card-carousel">
                {loaded.data.map((card, index) => (
                    <li
                        key={card.uuid}
                        className={`card ${determineClasses(indexes, index)}`}
                    >
                        <Card settings={card}/>
                    </li>
                ))}
            </ul>
            <button onClick={handleCardTransitionRight} className="nextButton" />
        </div>
    );
}