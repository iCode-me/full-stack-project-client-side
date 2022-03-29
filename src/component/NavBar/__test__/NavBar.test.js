import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';
import NavBar from '../NavBar';

const MockNavBar = () => {
    return (
        <BrowserRouter>
            <NavBar />
        </BrowserRouter>
    )
}

describe("NavBar", () => {

    it('should render the nav bar', async () => {
      // Arrange
        render(<MockNavBar />)

      // Act
        const navMenu = screen.getByTestId("nav-menu")

      // Assert
        expect(navMenu).toBeInTheDocument();
    });

    it('should render the nav links', async () => {
      // Arrange
        render(<MockNavBar />)
      
      // Act
        const navText = screen.queryByText("_courseology")
        const navAddCourse = screen.queryByText("Add course")

      // Assert
        expect(navText).toBeInTheDocument();
        expect(navAddCourse).toBeInTheDocument();

    });
    
})