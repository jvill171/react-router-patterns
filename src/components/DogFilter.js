import React from "react";
import DogDetails from './DogDetails';
import { useParams } from "react-router-dom";

/** DogFilter
 *
 * state: none
 *
 * props:
 *      - dogs: [ {name, src, age, facts[]} ]
 *
 *
 * RouteList -> DogFilter
 */
const DogFilter = ({dogs}) => {
    const { name } = useParams();
    if(name){
        const currDog = dogs.find(
            dog => dog.name === name
        );
        return <DogDetails dog={currDog} />
    }
    return null;
}

export default DogFilter;