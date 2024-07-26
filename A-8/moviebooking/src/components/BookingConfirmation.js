import React from "react";
import "./Bookingconfirmation.css";

function BookingConfirmation({ bookingInfo }) {
  const { movieId, name, email, mobile } = bookingInfo;
  const bookingId = Math.floor(Math.random() * 1000000);

  return (
    <div className="confirmation">
      <h1>Booking Confirmation</h1>
      <p>
        <span>Booking ID:</span> {bookingId}
      </p>
      <p>
        <span>Movie ID:</span> {movieId}
      </p>
      <p>
        <span>Name:</span> {name}
      </p>
      <p>
        <span>Email:</span> {email}
      </p>
      <p>
        <span>Mobile:</span> {mobile}
      </p>
    </div>
  );
}

export default BookingConfirmation;
