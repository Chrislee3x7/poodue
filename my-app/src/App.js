import campusMap from './images/purdueCampus.png'

import './App.css';
// import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import { useMemo } from 'react';

export default function App() {
  
  // const { isLoaded } = useLoadScript({googleMapsApiKey: "AIzaSyBpOAv7pgGXTnhaJ4PoG1hpyhdOFJ8a9II"});
  
  // if(!isLoaded) return <div>Loading map...</div>
  return ( 
    <div>
      <img  src={campusMap} alt="purdue campus map"/>
    </div>

  );
}
