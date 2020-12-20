
import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav( props ) {


    // Destructure 'props' from what was set in 'app.js'
    const {
        options = [],
        setCurrentOption,
        currentOption,
    } = props;
    
      useEffect(() => {
        document.title = capitalizeFirstLetter(currentOption.name);
      }, [currentOption]);



    //console.log("Options: ", options);

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="briefcase"> 💼</span> My Portfolio
                </a>
            </h2>

            <nav>
                <ul className="flex-row">

                    {options.map((option) => (
                        <li
                            className={`mx-1 ${
                                currentOption.name === option.name && 'navActive'}`}
                            key={option.name}
                        >
                            <span
                                onClick={() => {
                                    setCurrentOption(option);
                                }}
                            >
                                {capitalizeFirstLetter(option.name)}
                            </span>
                        </li>
                    ))}                   
                   
                </ul>
            </nav>
        </header>
    );
}

export default Nav;