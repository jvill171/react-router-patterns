import React from "react";
import { Link } from "react-router-dom"
import '../styles/Nav.css'

/** Nav
 *
 * state: none
 *
 * props:
 *      - dogNames: [ name ]
 *
 * App -> Nav
 */

const Nav = ({dogNames}) =>{

    return (
        <div className="Nav">
            <nav>
                <ul>
                    <Link to="/dogs">
                        <li>Home</li>
                    </Link>
                    { dogNames.map(name =>
                        <Link
                            to={`/dogs/${name}`}
                            key={`navlink-${name}`}
                        >
                            <li>{name}</li>
                        </Link>
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default  Nav;