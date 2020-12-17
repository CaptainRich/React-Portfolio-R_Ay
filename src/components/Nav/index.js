
import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav( props ) {


    // Destructure 'props' from what was set in 'app.js'
    const {
         contactSelected,
        setContactSelected
    } = props;
    
    //   useEffect(() => {
    //     document.title = capitalizeFirstLetter(currentCategory.name);
    //   }, [currentCategory]);


    // const handleClick = (item) => {
    //     console.log(item);
    //     return item;
    //   };

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/">
                    <span role="img" aria-label="briefcase"> 💼</span> My Portfolio
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={() => setContactSelected(false)} >
                            About me
                        </a>
                    </li>

                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    

                </ul>
            </nav>
        </header>
    );
}

export default Nav;