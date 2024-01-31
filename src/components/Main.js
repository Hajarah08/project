import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import React, { useReducer } from 'react';
import BookingForm from './BookingForm';




// Step 1: Life state up to the Main component
const Main = () => {
  const initializeTimes = () => {
    // Your logic to initialize availableTimes
    return [];
  };

  const updateTimes = (state, selectedDate) => {
    // Your logic to update availableTimes based on selectedDate
    return state; // For now, returning the same available times regardless of the date
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <>
    <div>
      {/* Other components or UI elements */}
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>

     <nav>
         <Link to="/">Home</Link>
         <Link to="/booking">Booking</Link>
       </nav>
       <Routes>
         <Route path="/" element={<Homepage />}></Route>
         <Route path="/booking" element={<BookingPage />}></Route>
       </Routes>
       </>
   );

};


   


export default Main;