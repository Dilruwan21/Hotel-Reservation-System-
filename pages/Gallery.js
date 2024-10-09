import React from 'react';
import './Gallery.css';
import Nav from '../Components/Nav'; // Reusing the Nav component
import g1 from './img/g1.jpg'
import g2 from './img/g2.jpg'
import g3 from './img/g3.jpg'
import g4 from './img/g4.jpg'
import g5 from './img/g5.jpg'
import g6 from './img/g6.jpg'


const galleryImages = [
    g1,  
    g2,
    g3,
    g4,
    g5,
    g6,
];

const Gallery = () => {
    return (
        <div>
            
            <div className="gallery-container">
                <h1>Gallery</h1>
                <div className="gallery-grid">
                    {galleryImages.map((image, index) => (
                        <img src={image} alt={`Gallery ${index + 1}`} key={index} className="gallery-image" />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
