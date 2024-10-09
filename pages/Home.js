
import React, { useState } from 'react';
import './HomePage.css';

import b4 from '../pages/img/b4.jpg'
import h3 from '../pages/img/h3.jpg'







const HomePage = () => {

      const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            image: h3,
            caption: 'Discover tranquility by the sea – reserve your stay now!',
        },
        {
            image: b4,
            caption: 'Elevate your seaside escape at Sea Level Top Hotel – book your room today!',
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
      <div>
        
      

        <div className="slider-container">
            <div className="slider">
                <img src={slides[currentSlide].image} alt="Slide" className="slide-image" />
                <div className="slide-caption">
                    {slides[currentSlide].caption}
                </div>
            </div>
            <button className="prev-slide" onClick={prevSlide}>❮</button>
            <button className="next-slide" onClick={nextSlide}>❯</button>

            <div className="reservations">
                <div>
                    <label>Arriving</label>
                    <input type="date" />
                </div>
                <div>
                    <label>Departing</label>
                    <input type="date" />
                </div>
                <div>
                    <label>Guests</label>
                    <input type="number" defaultValue="2" />
                </div>
                <button className="check-rates">Check Rates</button>
            </div>
        </div>
        </div>
        
    ); 
};

export default HomePage;
  