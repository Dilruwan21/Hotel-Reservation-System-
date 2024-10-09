import React, { useState } from 'react';
import './book.css';

const BookNow = () => {
  const [bookingDetails, setBookingDetails] = useState({
    name: '',
    email: '',
    roomType: 'Standard',
    checkInDate: '',
    checkOutDate: '',
    numberOfGuests: 1,
    totalAmount: 0,
  });

  const [depositAmount, setDepositAmount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingDetails({
      ...bookingDetails,
      [name]: value,
    });
  };

  const handleTotalAmountChange = (e) => {
    const total = parseFloat(e.target.value);
    setBookingDetails({ ...bookingDetails, totalAmount: total });
    setDepositAmount(total * 0.25); // Calculate 25% deposit
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, such as sending the booking data to a backend service
    alert(`Booking successful! Please pay the deposit amount: $${depositAmount.toFixed(2)}`);
  };

  return (
    <div className="book-now-container">
      <h1>Book a Room</h1>
      <p className="book-now-description">
        Please fill out the form below to book your room. You are required to pay 25% of the total payment as a deposit.
      </p>
      <form className="book-now-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={bookingDetails.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={bookingDetails.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="roomType">Room Type</label>
          <select
            id="roomType"
            name="roomType"
            value={bookingDetails.roomType}
            onChange={handleChange}
          >
            <option value="Standard">Standard Room</option>
            <option value="Deluxe">Deluxe Room</option>
            <option value="Suite">Suite</option>
            <option value="Executive Suite">Suite</option>
            <option value="Family Room">Suite</option>

          </select>
        </div>

        <div className="form-group">
          <label htmlFor="checkInDate">Check-In Date</label>
          <input
            type="date"
            id="checkInDate"
            name="checkInDate"
            value={bookingDetails.checkInDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="checkOutDate">Check-Out Date</label>
          <input
            type="date"
            id="checkOutDate"
            name="checkOutDate"
            value={bookingDetails.checkOutDate}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="numberOfGuests">Number of Guests</label>
          <input
            type="number"
            id="numberOfGuests"
            name="numberOfGuests"
            value={bookingDetails.numberOfGuests}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="totalAmount">Total Amount ($)</label>
          <input
            type="number"
            id="totalAmount"
            name="totalAmount"
            value={bookingDetails.totalAmount}
            onChange={handleTotalAmountChange}
            placeholder="Enter the total amount"
            required
          />
        </div>

        <div className="form-group">
          <h3>Total Deposit to Pay: ${depositAmount.toFixed(2)}</h3>
        </div>

        <button type="submit" className="book-now-button">Confirm Booking & Pay Deposit</button>
      </form>
    </div>
  );
};

export default BookNow;
