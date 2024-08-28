import React from 'react';
import '../components/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; 2024 Community Resource Hub. All Rights Reserved.</p>
            <div className="social-links">
                <a href="https://www.facebook.com"> Facebook </a>
                <a href="https://www.twitter.com"> Twitter </a>
                <a href="https://www.instagram.com">Instagram </a>
            </div>
        </footer>
    );
};

export default Footer;