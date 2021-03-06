import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Expertise from './components/Expertise';
import Presentations from './components/Presentations';
import ContactForm from './components/Contact';
import Footer from './components/Footer';



////////////////////////////////////////////////////////////////////////////////

// This is the center of the application, the root component, or wrapper that
// houses all of the other components.  To effect any change on the application
// we need to either modify this file or add components inside of it.

////////////////////////////////////////////////////////////////////////////////
function App() {

  // Maintain the state of the application and what is currently rendered.



  const [options] = useState([
    {
      name: "about",
      description: "A brief personal overview.",
    },
    {
      name: "portfolio",
      description: "A list of the projects completed.",
    },
    { name: "expertise", 
      description: "My capabilities.", 
    },
    { name: "presentations", 
      description: "A few interesting presentations.", 
    },    
    {
      name: "contact",
      description: "Request a return communication."
    }
  ]);

  const [ currentOption, setCurrentOption ] = useState( options[0] );

  const renderPage = ( page ) => {  
 
    switch (page.name) {


      case 'portfolio':
        return <Portfolio />;
        
      case 'expertise':
        return <Expertise />;
        
        case 'presentations':
          return <Presentations />;        

      case 'contact':
        return <ContactForm />;
        
      case 'about':
      default:
        return <About />;
    }
  }

  const renderFooter = () => {
      return <Footer />;
  }

  return (
    <div>
      {/* This element will put up the header. */}
      <Nav
        options={options}
        setCurrentOption={setCurrentOption}
        currentOption={currentOption}
      >
      </Nav>

      <main>
        <div>
          {/* Display the selected page. */}
          {renderPage(currentOption)}
        </div>
      </main>

      <footer>
        <div>
          {/* Display the page footer. */}
          {renderFooter()}
        </div>
      </footer>
    </div>
  );
}

export default App;
