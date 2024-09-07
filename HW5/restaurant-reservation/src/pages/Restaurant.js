import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Restaurant.css';

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
      image: '/images/restaurant1.jpg',
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
      image: '/images/restaurant2.jpg',
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
      image: '/images/restaurant3.jpg',
      totalReviews: 15,
    }
  ];

  const Restaurant = () => {
    const { id } = useParams();
    const restaurant = restaurants.find(res => res.id === parseInt(id));
    const [reservationTime, setReservationTime] = useState('');
    const [numPeople, setNumPeople] = useState(1);
    const [reservationDate, setReservationDate] = useState('');
    const [reviews, setReviews] = useState([
      {
        food: 2,
        service: 3,
        ambiance: 4,
        overall: 2,
        comment: 'Perfection.',
        user: 'Mohammad',
        date: '2024-08-25',
      },
    ]);
    const [newReview, setNewReview] = useState({
      food: 0,
      service: 0,
      ambiance: 0,
      overall: 0,
      comment: '',
      user: 'Mohammad',
      date: new Date().toISOString().split('T')[0],
    });
  
    const handleSubmit = (e) => {
      e.preventDefault();
      alert(`Reservation made for ${numPeople} people on ${reservationDate} at ${reservationTime}`);
    };
  
    const handleReviewSubmit = (e) => {
      e.preventDefault();
      setReviews([...reviews, newReview]);
      setNewReview({
        food: 0,
        service: 0,
        ambiance: 0,
        overall: 0,
        comment: '',
        user: 'Mohammad',
        date: new Date().toISOString().split('T')[0],
      });
    };
  
    return (
      <div className="restaurant-page">
        <div className="restaurant-header">
          <img className="restaurant-image" src={restaurant.image} alt={restaurant.name} />
          <div className="restaurant-details">
            <h1>{restaurant.name}</h1>
            <p>
              <i className="fa fa-clock"></i> From {restaurant.startTime} to {restaurant.endTime}
            </p>
            <p>
              <i className="fa fa-location-arrow"></i> {restaurant.address.country}, {restaurant.address.city}, {restaurant.address.street}
            </p>
            <p>{restaurant.description}</p>
          </div>
          <div className="reservation-section">
            <h3>Reserve Table</h3>
            <form onSubmit={handleSubmit}>
              <label>
                For
                <select value={numPeople} onChange={(e) => setNumPeople(e.target.value)}>
                  {[...Array(restaurant.maxSeatsNumber)].map((_, i) => (
                    <option key={i} value={i + 1}>{i + 1}</option>
                  ))}
                </select>
                people, on date
                <input type="date" value={reservationDate} onChange={(e) => setReservationDate(e.target.value)} required />
              </label>
              <div className="available-times">
                {[...Array(14)].map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={reservationTime === `${i + 8}:00` ? 'selected' : ''}
                    onClick={() => setReservationTime(`${i + 8}:00`)}
                  >
                    {`${i + 8}:00`}
                  </button>
                ))}
              </div>
              <button className="reserve-button" type="submit">Complete the Reservation</button>
            </form>
          </div>
        </div>
  
        <div className="reviews-section">
          <h3>What {restaurant.totalReviews} people are saying</h3>
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <p><strong>{review.user}</strong> rated it {review.overall}/5</p>
              <p>"{review.comment}"</p>
              <p className="review-date">{review.date}</p>
            </div>
          ))}
  
          <div className="add-review">
            <h3>Add Review</h3>
            <form onSubmit={handleReviewSubmit}>
              <label>Food Rating:</label>
              <input
                type="number"
                min="1"
                max="5"
                value={newReview.food}
                onChange={(e) => setNewReview({ ...newReview, food: e.target.value })}
                required
              />
              <label>Service Rating:</label>
              <input
                type="number"
                min="1"
                max="5"
                value={newReview.service}
                onChange={(e) => setNewReview({ ...newReview, service: e.target.value })}
                required
              />
              <label>Ambiance Rating:</label>
              <input
                type="number"
                min="1"
                max="5"
                value={newReview.ambiance}
                onChange={(e) => setNewReview({ ...newReview, ambiance: e.target.value })}
                required
              />
              <label>Overall Rating:</label>
              <input
                type="number"
                min="1"
                max="5"
                value={newReview.overall}
                onChange={(e) => setNewReview({ ...newReview, overall: e.target.value })}
                required
              />
              <label>Comment:</label>
              <textarea
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                required
              />
              <button type="submit">Submit Review</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Restaurant;