import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/Contact';



////////////////////////////////////////////////////////////////////////////////

// This is the center of the application, the root component, or wrapper that
// houses all of the other components.  To effect any change on the application
// we need to either modify this file or add components inside of it.

////////////////////////////////////////////////////////////////////////////////
function App() {

  // Maintain the state of the application and what is currently rendered.
  // By initializing 'contactSelected to false, the contact form will not be initially shown.
  const [contactSelected, setContactSelected] = useState(false);


  const [options] = useState([
    {
      name: "about",
      description: "A brief personal overview.",
    },
    {
      name: "portfolio",
      description: "A list of the projects completed.",
    },
    { name: "resume", 
      description: "My Resume.", 
    },
  ]);

  const [ currentOption, setCurrentOption ] = useState( options[0] );

  const renderPage = ( page ) => {  
 
    switch (page.name) {


      case 'portfolio':
        // return <Portfolio />;
        
      case 'resume':
        // return <Resume />;
        
      case 'about':
      default:
        return <About />;
    }
  }

  return (
    <div> 
      {/* This element will put up the header. */}
      <Nav
        options            = {options}
        setCurrentOption   = {setCurrentOption}
        currentOption      = {currentOption}
        contactSelected    = {contactSelected}
        setContactSelected = {setContactSelected}
      >
      </Nav>     

      <main>
        {!contactSelected ? (
          <div>
            {/* Render the selected page if 'contactSelected' is false. */}

            {renderPage( currentOption )}
          </div>
        ) : (
          // Render the contact form if 'contactSelected' is true. 
          <div>
             <ContactForm></ContactForm>
          </div>
      )}
      </main>
    </div>
  );
}

export default App;
