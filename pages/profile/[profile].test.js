//import React from "react"; 
import { render, fireEvent } from "@testing-library/react"; 
import Profile from "../pages/profile/[profile].js";

//Test - can render Profile 
test('Can render profile', () => {
    const { getByText } = render(<Profile />); 
    expect(getByText("My Profile")).toBeInTheDocument();
});

//Test - can change name 
test('Can change name", () => {
    const { getByLabelText, getByText } = render(<Profile />); 
    const nameInput = getByLabelText("Name"); 
    fireEvent.change(nameInput, { target: { value: "Mylene" } }); 
    expect(getByText("Mylene")).toBeInTheDocument();
});

//Test - can add to phone list 
test('Can add to phone list', () => {
    const { getByLabelText, getByText, getAllByTestId } = render(<Profile />); 
    const newPhoneInput = getByLabelText("New Phone"); 
    const phoneNumber = "123-456-7890";
	fireEvent.change(newPhoneInput, { target: { value: phoneNumber } }); 
    fireEvent.click(getByText("Add Phone")); 
    expect(getAllByTestId("phone-list-item")).toHaveLength(2); 
    expect(getByText(phoneNumber)).toBeInTheDocument();
});