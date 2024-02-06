import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "./your-reducer-file"; 


test("Renders the BookingForm heading", () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});

// Adjust the code based on what your BookingForm component should render.
test("Renders static text in BookingForm component", () => {
  render(<BookingForm />);
  const staticTextElement = screen.getByText("Your Static Text Here");
  expect(staticTextElement).toBeInTheDocument();
});

test("initializeTimes returns the correct expected value", () => {
  const initialState = {
    // Your initial state here
  };

  const result = initializeTimes(initialState);
  // Your expected value after initialization
  expect(result).toEqual(/* Your expected value here */);
});

test("updateTimes returns the same value provided in the state", () => {
  const currentState = {
    // Your current state here
  };

  const result = updateTimes(currentState);
  // Since updateTimes should return the same state, expect equality
  expect(result).toEqual(currentState);
});                                                                                  