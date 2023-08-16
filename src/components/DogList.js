import React from "react";
import { Link } from "react-router-dom"
import '../styles/DogList.css'


/** DogList
 *
 * state: none
 *
 * props:
 *      - dogs: [ {name, src, age, facts[]} ]
 *
 * RouteList -> DogList
 */
const DogList = ({dogs}) => {
    return(
        <div className="DogList">
            <h1>Check out our cute dogs!</h1>
            {dogs.map(d => {
                return (
                    <Link to={`/dogs/${d.name}`} key={d.name} >
                        <div className="doglist-display">
                            <h3>{d.name}</h3>
                            <img src={`/${d.src}.jpg`} alt={d.name} />
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default DogList;