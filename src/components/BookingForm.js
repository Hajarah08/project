import React, { useState } from 'react';

const BookingForm = ({availableTimes,dispatch}) => {
   // State variables for form fields
   const [date, setDate] = useState('');
   const [time, setTime] = useState('17:00'); // Default time
   const [numGuests, setNumGuests] = useState(1);
   const [occasion, setOccasion] = useState('Birthday'); // Default occasion

   // Event handler for form submission
   const handleSubmit = (e) => {
      e.preventDefault();

      // Perform any additional actions on form submission (e.g., API call)
      console.log('Reservation submitted:', { date, time, numGuests, occasion });
   };

   
   const handleDateChange =(selectedDate) => {
    dispatch(selectedDate);
   };

   return (
     <form
       style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
       onSubmit={handleSubmit}
     >
       <label htmlFor="res-date">Date</label>
       <input
         type="date"
         id="res-date"
         value={date}
         onChange={(e) => setDate(e.target.value)}
       />

       <label htmlFor="res-time">Time</label>
       <select
         id="res-time"
         value={time}
         onChange={(e) => setTime(e.target.value)}
       >
         <option>17:00</option>
         <option>18:00</option>
         <option>19:00</option>
         <option>20:00</option>
         <option>21:00</option>
         <option>22:00</option>
       </select>

       <label htmlFor="guests">Number of Guests</label>
       <input
         type="number"
         placeholder="1"
         min="1"
         max="10"
         id="guests"
         value={numGuests}
         onChange={(e) => setNumGuests(e.target.value)}
       />

       <label htmlFor="occasion">Occasion</label>
       <select
         id="occasion"
         value={occasion}
         onChange={(e) => setOccasion(e.target.value)}
       >
         <option>Birthday</option>
         <option>Anniversary</option>
       </select>

       <input type="submit" value="Submit Reservation" />
       <label htmlFor="date">Select Date:</label>
       <input
         type="date"
         id="date"
         onChange={(e) => handleDateChange(e.target.value)}
       />

       {/* Display available times based on selected date */}
       <ul>
         {availableTimes.map((time) => (
           <li key={time}>{time}</li>
         ))}
       </ul>
     </form>
   );

         };




export default BookingForm;