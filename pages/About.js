import React from 'react';
import './about.css';
// Import your own photos from the local project folder
import a1 from './img/a1.jpg';
import a2 from './img/a2.jpg';
import a3 from './img/a3.jpg';

const AboutUs = () => {
  return (
    <div className="about-container">
      <section className="about-section">
        <h1>About Our Hotel</h1>
        <p className="about-description">
          Welcome to our luxurious hotel, where hospitality meets elegance. 
          Nestled in the heart of [City Name], we offer an unforgettable experience 
          with world-class services, breathtaking views, and exquisite amenities.
        </p>
        <div className="about-features">
          <div className="feature">
            <img
              src={a1}
              alt="Hotel Exterior"
              className="feature-image"
            />
            <h2>Modern Architecture</h2>
            <p>
              Designed with contemporary elegance, our hotel offers modern rooms 
              with stylish interiors and spacious areas that make your stay unforgettable.
            </p>
          </div>
          <div className="feature">
            <img
              src={a2}
              alt="Hotel Lobby"
              className="feature-image"
            />
            <h2>Luxury Interiors</h2>
            <p>
              Our beautifully crafted lobby is a welcoming space where guests can relax 
              and unwind. The interiors reflect the perfect blend of tradition and modernity.
            </p>
          </div>
          <div className="feature">
            <img
              src={a3}
              alt="Hotel Room"
              className="feature-image"
            />
            <h2>Comfortable Rooms</h2>
            <p>
              Whether you are staying for business or leisure, our rooms are designed to 
              provide maximum comfort with plush bedding and stunning views.
            </p>
          </div>
        </div>
        <div className="about-bottom-section">
          <h2>Our Story</h2>
          <p>
            Established in [Year], our hotel has been serving guests with top-notch services 
            and unforgettable experiences. With a legacy of luxury and hospitality, we continue 
            to be a leading destination for both local and international travelers.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;


