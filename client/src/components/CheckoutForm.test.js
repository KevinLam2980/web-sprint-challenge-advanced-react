import React from "react";
import { render, fireEvent, screen, getByRole, getByText } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>)
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm/>)

    //firstname
    const firstName = screen.getByLabelText(/first name:/i)
    //lastname
    const lastName = screen.getByLabelText(/last name:/i)
    //address
    const address = screen.getByLabelText(/address:/i)
    //city
    const city = screen.getByLabelText(/city:/i)
    //state
    const state = screen.getByLabelText(/state:/i)
    //zip
    const zip = screen.getByLabelText(/zip:/i)
    //button

   
    await fireEvent.change(firstName, { target: { value: 'Kevin'}})
    expect(firstName).toHaveValue('Kevin')

    await fireEvent.change(lastName, { target: { value: 'Lam'}})
    expect(lastName).toHaveValue('Lam')
        
    await fireEvent.change(address, { target: { value: '123 street'}})
    expect(address).toHaveValue('123 street')

    await fireEvent.change(city, { target: { value: 'Winderfel'}})
    expect(city).toHaveValue('Winderfel')

    await fireEvent.change(state, { target: { value: 'WO'}})
    expect(state).toHaveValue('WO')

    await fireEvent.change(zip, { target: { value: '98765'}})
    expect(zip).toHaveValue('98765')
 
    //checkout
    const submitBtn = screen.getByRole('button', { name: /checkout/i})
    expect(submitBtn).toBeInTheDocument()
    await fireEvent.click(submitBtn)

    //success
    const successMessage = screen.getByTestId('successMessage')
    expect(successMessage).toBeInTheDocument()
    


});
