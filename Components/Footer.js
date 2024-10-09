import React from 'react';
import './footer.css'; // Custom CSS for any additional styling


const Footer = () => {
    return (
        <footer className="footer bg-dark text-white py-4">
            <div className="container">
                <div className="row">
                    {/* Company Info */}
                    <div className="col-md-4">
                        <h5>Who we are</h5>
                        <p>
                            We are a luxury hotel dedicated to providing our guests with the best experience. Enjoy fine dining, scenic views, and unparalleled hospitality.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/accommodation" className="text-white">Accommodations</a></li>
                            <li><a href="/offers" className="text-white">Offers</a></li>
                            <li><a href="/gallery" className="text-white">Gallery</a></li>
                            <li><a href="/contact" className="text-white">Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="col-md-4">
                        <h5>Follow Us</h5>
                        <div className="social-icons">
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-white me-3">
                                <i className="fab fa-facebook fa-2x"></i>
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="text-white me-3">
                                <i className="fab fa-twitter fa-2x"></i>
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-white me-3">
                                <i className="fab fa-instagram fa-2x"></i>
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-white me-3">
                                <i className="fab fa-linkedin fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col text-center">
                        <p>&copy; 2024 HOTEL AK. All Rights Reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
