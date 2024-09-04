import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../components/HomePage.css';

const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        console.log('Search query:', searchQuery);
    };

    return (
        <div className="home-container">
            <header className="hero-section">
                <h1>Welcome to the Community Resource Hub</h1>
                <p>Your one-stop destination for accessing various community resources.</p>
                <Link to="/resources">
                    <button>View Resources</button>
                </Link>
                <Link to="/categories">
                    <button>Explore Categories</button>
                </Link>
            </header>

            <section className="intro-section">
                <h2>Our Mission</h2>
                <p>We aim to connect individuals and families with the resources they need, from food and clothing to education and healthcare. Explore our categories and find the help you need today.</p>
            </section>

            <section className="search-section">
                <input 
                    type="text" 
                    placeholder="Search resources, categories..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} 
                />
                <button onClick={handleSearch}>Search</button>
            </section>

            <section className="featured-section">
                <h2>Featured Resources</h2>
                <div className="featured-cards">
                    <div className="card">
                        <h3>Food Banks</h3>
                        <p>Find local food banks that can help you and your family.</p>
                        <Link to="/resources?category=Food">
                            <button>Explore</button>
                        </Link>
                    </div>
                    <div className="card">
                        <h3>Clothing Donations</h3>
                        <p>Locate clothing donation centers near you.</p>
                        <Link to="/resources?category=Clothing">
                            <button>Explore</button>
                        </Link>
                    </div>
                    <div className="card">
                        <h3>Educational Programs</h3>
                        <p>Access educational resources for all ages.</p>
                        <Link to="/resources?category=Education">
                            <button>Explore</button>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="testimonials-section">
                <h2>Success Stories</h2>
                <div className="testimonial">
                    <p>"The Community Resource Hub helped me find the support I needed when I was struggling. The food bank resources were a lifesaver!"</p>
                    <p>- Jane Doe</p>
                </div>
                <div className="testimonial">
                    <p>"Thanks to the educational programs listed here, my kids are excelling in school. I can't thank you enough!"</p>
                    <p>- John Smith</p>
                </div>
            </section>

            <section className="cta-section">
                <h2>Get Involved</h2>
                <p>Join our community of supporters and make a difference today. Whether you want to volunteer, donate, or simply stay informed, there's a place for you here.</p>
                <Link to="/get-involved">
                    <button>Learn More</button>
                </Link>
            </section>

        </div>
    );
};

export default HomePage;