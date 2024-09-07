// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Assuming you will use CSS for styling

const restaurants = [
  {
    id: 1,
    name: 'The Great Foods',
    type: 'Fast Food',
    startTime: '08:00',
    endTime: '21:00',
    description: 'A wonderful place to eat.',
    address: { country: 'Iran', city: 'Karaj', street: 'Bahar' },
    averageRating: { food: 2, service: 3, ambiance: 4, overall: 2 },
    starCount: 2,
    maxSeatsNumber: 6,
    image: '/restaurant1.jpg',
    totalReviews: 10,
  },
  {
    id: 2,
    name: 'The Best Foods',
    type: 'Seafood',
    startTime: '09:00',
    endTime: '22:00',
    description: 'Fresh seafood dishes.',
    address: { country: 'Iran', city: 'Tehran', street: 'Velenjak' },
    averageRating: { food: 4, service: 4, ambiance: 4, overall: 4 },
    starCount: 4,
    maxSeatsNumber: 10,
    image: '/restaurant2.jpg',
    totalReviews: 20,
  },
  {
    id: 3,
    name: 'The Better Foods',
    type: 'Fast Food',
    startTime: '11:00',
    endTime: '20:00',
    description: 'Best fast food in town.',
    address: { country: 'Iran', city: 'Esfahan', street: 'Ferdowsi' },
    averageRating: { food: 3, service: 4, ambiance: 3, overall: 3 },
    starCount: 3,
    maxSeatsNumber: 8,
    image: '/restaurant3.jpg',
    totalReviews: 15,
  },
];

const Home = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src="/logo.png" alt="Logo" />
        </div>
        <div className="welcome-message">
          <h1>Welcome, Mohammad!</h1>
        </div>
        <div className="reservation-button">
          <Link to="/customer">
            <button>My Reservations</button>
          </Link>
        </div>
      </header>

      {/* Main Section with Food Image */}
      <section className="hero-section">
        <img src="/food.jpg" alt="Delicious Food" className="hero-image" />
      </section>

      {/* Restaurant Cards */}
      <div className="restaurant-list">
        <h2>Top Restaurants in Mizdooni</h2>
        <div className="restaurant-cards">
          {restaurants.map(restaurant => (
            <div key={restaurant.id} className="restaurant-card">
              <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
              <h3>{restaurant.name}</h3>
              <p>{restaurant.description}</p>
              <p>Type: {restaurant.type}</p>
              <p>Open: {restaurant.startTime} - Closes at: {restaurant.endTime}</p>
              <Link to={`/restaurant/${restaurant.id}`} className="details-link">View Details</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>Thank you for using our services.</p>
        <p>&copy; 2024 Mizdooni - All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
