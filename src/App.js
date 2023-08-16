import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Nav from'./components/Nav';
import RouteList from './components/RouteList';

/** RouteList
 *
 * state: none
 *
 * props:
 *      - dogs: [ {name, src, age, facts[]} ]
 * 
 * Includes defaultProps.
 *
 * App -> RouteList
 */

function App({dogs}) {

  return (
    <div className="App">
      <BrowserRouter>
        <Nav dogNames={dogs.map(dog => dog.name)} />
        <RouteList dogs={dogs}/>
      </BrowserRouter>
    </div>
  );
}

// Default props for App to use
App.defaultProps = {
  "dogs": [
      {
        "name": "Whiskey",
        "age": 5,
        "src": "whiskey",
        "facts": [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        "name": "Duke",
        "age": 3,
        "src": "duke",
        "facts": [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        "name": "Perry",
        "age": 4,
        "src": "perry",
        "facts": [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      }
    ]
};


export default App;
