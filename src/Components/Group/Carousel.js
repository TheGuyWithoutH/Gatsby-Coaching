import React, { useEffect, useCallback, useState } from 'react';
import '../../styles/Carousel.css'
import Card from "./Card";

const cardItems = [
    {
        id: 1,
        imgUrl: 'https://images.ctfassets.net/hrltx12pl8hq/3AnnkVqrlhrqb9hjlMBzKX/693a8e5d40b4b6c55a7673ca4c807eef/Girl-Stock?fit=fill&w=480&h=270',
        name: 'Jane',
        surname: 'Christie',
        age: '18',
        origin: 'Française - Paris',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla. Etiam sed interdum est.',
        hobbys: ['kart', 'cinema', 'foot', 'code']
    },
    {
        id: 2,
        imgUrl: 'https://st4.depositphotos.com/12982378/23038/i/600/depositphotos_230382864-stock-photo-high-angle-view-of-attractive.jpg',
        name: 'Stéphanie',
        surname: 'Robert',
        age: '19',
        origin: 'Française - Toulouse',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla. Etiam sed interdum est.',
        hobbys: ['kart', 'cinema', 'foot', 'code']
    },
    {
        id: 3,
        imgUrl: 'https://st.depositphotos.com/1011643/2013/i/600/depositphotos_20131051-stock-photo-african-college-boy-standing-outdoors.jpg',
        name: 'Baptiste',
        surname: 'Duchêne',
        age: '18',
        origin: 'Français - Strasbourg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla. Etiam sed interdum est.',
        hobbys: ['kart', 'cinema', 'foot', 'code']
    },
    {
        id: 4,
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTymYmbvnevAjuMuO0dkCajzfsRuGkCWBty3w&usqp=CAU',
        name: 'Sebastien',
        surname: 'Ulrich',
        age: '22',
        origin: 'Suisse - Bern',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet dui scelerisque, tempus dui non, blandit nulla. Etiam sed interdum est.',
        hobbys: ['kart', 'cinema', 'foot', 'code']
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
    const [indexes, setIndexes] = useState({
        previousIndex: 0,
        currentIndex: 0,
        nextIndex: 1,
    });

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

    return (
        <div className="container">
            <button onClick={handleCardTransitionLeft} className="prevButton"/>
            <ul className="card-carousel">
                {cardItems.map((card, index) => (
                    <li
                        key={card.id}
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