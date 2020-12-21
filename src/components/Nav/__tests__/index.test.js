
import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

// Add the data and mock functions to address the 'props' passed into 
// the Nav() function.
const options = [
  { name: 'about', description: 'A brief personal overview.' }
]
const mockCurrentOption = jest.fn();
const mockSetCurrentOption = jest.fn();



// Invoke the cleanup function, to remove components from the DOM to prevent
// memory leaks as well as variable/data collisions between tests.
afterEach( cleanup );

// Declare the component we're testing
describe( "About component", () =>{
    
        
    // First test - baseline to verify the component is rendering
    it('renders', () => {
      render(<Nav
        options={options}
        setCurrentCategory={mockSetCurrentOption}
        currentCategory={mockCurrentOption}
      />);
      });

    // Second test - compare a snapshot of the 'Nav' component
    it('matches snapshot', () => {
        
        const { asFragment } = render(<Nav 
          options={options}
          setCurrentOption={mockSetCurrentOption}
          currentOption={mockCurrentOption}
        />);
        
        expect(asFragment()).toMatchSnapshot();
      });

});

// Now test for the 'briefcase emoji'
describe('emoji is visible', () => {

    it('inserts emoji into the h2', () => {

        // Arrange
        const { getByLabelText } = render(<Nav 
          options={options}
          setCurrentOption={mockSetCurrentOption}
          currentOption={mockCurrentOption}
        />);

        // Assert  
        expect(getByLabelText('briefcase')).toHaveTextContent('💼');

    })
});


// Now test the navigation links
describe('links are visible', () => {

    it('inserts text into the links', () => {

      // Arrange
      const { getByTestId } = render(<Nav 
        options={options}
        setCurrentOption={mockSetCurrentOption}
        currentOption={mockCurrentOption}
        />);

      // Assert
      expect(getByTestId('link')).toHaveTextContent('Portfolio for Richard Ay');
      //expect(getByTestId('about')).toHaveTextContent('about');

    });
  });