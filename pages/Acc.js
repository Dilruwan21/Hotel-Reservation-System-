import React from 'react';
import './Acc.css';
import bb1 from './img/bb1.jpeg';
import bb2 from './img/bb2.jpeg';
import bb3 from './img/bb3.jpeg';
import bb4 from './img/bb4.jpeg';
import bb5 from './img/bb5.jpeg';
import bb6 from './img/bb6.jpeg';

const accommodations = [
    {
        id: 1,
        image: bb1,
        title: 'Deluxe Room',
        price: '$200/night',
        description: 'A beautiful room with a stunning view of the ocean.',
    },
    {
        id: 2,
        image: bb2,
        title: 'Suite',
        price: '$350/night',
        description: 'Spacious and luxurious, perfect for a family vacation.',
    },
    {
        id: 3,
        image: bb3,
        title: 'Standard Room',
        price: '$150/night',
        description: 'Comfortable and affordable with all the basic amenities.',
    },
    {
        id: 4,
        image: bb4,
        title: 'Executive Suite',
        price: '$450/night',
        description: 'Our top-tier suite, ideal for a luxurious stay with VIP service.',
    },
    {
        id: 5,
        image: bb5,
        title: 'Family Room',
        price: '$300/night',
        description: 'Spacious room with multiple beds, perfect for families.',
    },
    {
        id: 6,
        image: bb6,
        title: 'Honeymoon Suite',
        price: '$400/night',
        description: 'Romantic suite with a beautiful view, ideal for honeymooners.',
    },
];

const Accommodation = () => {
    return (
        <div className="accommodation-container">
            <h1>Our Accommodations</h1>
            <div className="accommodations">
                {accommodations.map((acc, index) => (
                    <div
                        className="accommodation-item"
                        key={acc.id}
                    >
                        <img src={acc.image} alt={`${acc.title} - ${acc.description}`} className="accommodation-image" />
                        <div className={`accommodation-details ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                            <h2>{acc.title}</h2>
                            <p>{acc.price}</p>
                            <p>{acc.description}</p>
                            <button className="book-now-btn">Book Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Accommodation;
