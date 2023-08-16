import React from "react";
import '../styles/DogDetails.css'


/** DogDetails
 *
 * state: none
 *
 * props:
 *      - dog: {name, src, age, facts[]}
 *
 *
 * DogFilter -> DogDetails
 */

const DogDetails = ({dog}) => {

    return (
        <div className="DogDetails">
            <h1>{dog.name}</h1>
            <img src={`/${dog.src}.jpg`} alt={dog.name}/>
            <p><b>Age:</b> {dog.age}</p>
            <div className="about">
                <h4>About {dog.name}</h4>
                <ul>
                    {dog.facts.map((fact, idx) => <li key={`about-${idx}`}>{ fact }</li> )}
                </ul>
            </div>
        </div>
    )
}

export default DogDetails;