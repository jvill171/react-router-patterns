import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom'
import DogList from './DogList'
import DogFilter from './DogFilter';
import '../styles/RouteList.css'


/** RouteList
 *
 * state: none
 *
 * props:
 *      - dogs: [ {name, src, age, facts[]} ]
 *
 * App -> RouteList
 */


const RouteList = ({dogs}) => {
    return(
      <div className="RouteList">
        <Routes>
          <Route 
            path="/dogs"
            element={ <DogList dogs={dogs} /> }
          />
          <Route 
            path="/dogs/:name"
            element={ <DogFilter dogs={dogs} /> }
          />
          <Route 
            path='*'
            element={ <Navigate to="/dogs" /> }
          />
        </Routes>
      </div>
    )
}

export default RouteList;