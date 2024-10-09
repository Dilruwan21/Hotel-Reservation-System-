import React from 'react';
import './offers.css';
import Nav from '../Components/Nav'; // Reusing the Nav component
import f2 from './img/f2.jpg'
import f1 from './img/f1.jpg'

const offers = [
    {
        image: f1,  // Replace with actual image paths
        title: 'Summer Special',
        description: 'Get 20% off on all bookings made for summer 2024!',
        buttonText: 'Book Now',
    },
    {
        image: f2,
        title: 'Couples Retreat',
        description: 'Enjoy a romantic getaway with special couples packages.',
        buttonText: 'Learn More',
    },
];

const Offers = () => {
    return (
        <div>
            
            <div className="offers-container">
                <h1>Special Offers</h1>
                <div className="offers">
                    {offers.map((offer, index) => (
                        <div className="offer-item" key={index}>
                            <img src={offer.image} alt={offer.title} />
                            <h2>{offer.title}</h2>
                            <p>{offer.description}</p>
                            <button>{offer.buttonText}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Offers;
