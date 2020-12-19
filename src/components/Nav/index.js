
import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav( props ) {


    // Destructure 'props' from what was set in 'app.js'
    const {
        options = [],
        setCurrentOption,
        currentOption,
        contactSelected,
        setContactSelected
    } = props;
    
      useEffect(() => {
        document.title = capitalizeFirstLetter(currentOption.name);
      }, [currentOption]);


    // const handleClick = (item) => {
    //     console.log(item);
    //     return item;
    //   };

    console.log("Options: ", options);

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="briefcase"> 💼</span> My Portfolio
                </a>
            </h2>

            <nav>
                <ul className="flex-row">
                    {/* <li className={`mx-2 ${!contactSelected && 'navActive'}`}>
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)} >
                            About me
                        </a>
                    </li> */}


                    {options.map((option) => (
                        <li
                            className={`mx-1 ${
                                currentOption.name === option.name && !contactSelected && 'navActive'}`}
                            key={option.name}
                        >
                            <span
                                onClick={() => {
                                    setCurrentOption(option);
                                    setContactSelected(false);
                                }}
                            >
                                {capitalizeFirstLetter(option.name)}
                            </span>
                        </li>
                    ))}                   

                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
}

export default Nav;