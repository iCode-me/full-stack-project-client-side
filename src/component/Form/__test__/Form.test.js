import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import Form from '../Form';

const MockForm = () => {
    return (
        <BrowserRouter>
            <Form />
        </BrowserRouter>
    )
}

describe("Form", () => {

    it('should render the nav bar', async () => {
      // Arrange
        render(<MockForm />)

      // Act
        const formInput = screen.getByTestId("form")

      // Assert
        expect(formInput).toBeInTheDocument();
    });

    it('should be able to type into the input box', async () => {
      // Arrange
        render(<MockForm />)
      
      // Act
        const inputElement = screen.getByPlaceholderText(/name/i)
        userEvent.click(inputElement)
        userEvent.type(inputElement, "JavaScript Course")

      // Assert
        expect(inputElement.value).toBe("JavaScript Course");

    });

    
    
})