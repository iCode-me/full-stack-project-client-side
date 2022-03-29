import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import SearchBox from '../SearchBox';

const MockSearchBox = () => {
    return (
        <BrowserRouter>
            <SearchBox />
        </BrowserRouter>
    )
}

describe("SearchBox", () => {

    it('should render search box', async () => {
      // Arrange
        render(<MockSearchBox />)

      // Act
        const inputElement = screen.getByTestId("search-box")

      // Assert
        expect(inputElement).toBeInTheDocument();
    });

    it('should render input element', async () => {
      // Arrange
        render(<MockSearchBox />)
      
      // Act
        const inputElement = screen.getByPlaceholderText(/Enter course title/i)

      // Assert
        expect(inputElement).toBeInTheDocument('');
    });

    it('should be able to type into the input box', async () => {
      // Arrange
        render(<MockSearchBox searchTerm={[]} handleInput={MockSearchBox}/>)
      
      // Act
        const inputElement = screen.getByPlaceholderText(/Enter course title/i)
        userEvent.click(inputElement)
        userEvent.type(inputElement, 'JavaScript Course')

      // Assert
        expect(inputElement.value).toBe('JavaScript Course');
    });
})