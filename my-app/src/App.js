import logo from './logo.svg';
import MapSection from './components/map/Map' // import the map here

import './App.css';

const location = {
  address: '610 Purdue Mall, West Lafayette, IN 47907',
  lat: 40.4237,
  lng: -86.9212,
}

// const location = {
//   address: '1600 Amphitheatre Parkway, Mountain View, california.',
//   lat: 37.42216,
//   lng: -122.08427,
// }

function App() {
  return (
    // <div>MAP!!!</div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <MapSection location={location} zoomLevel={17} /> /*include it here*/
  );
}

export default App;
