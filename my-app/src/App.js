import campusMap from './images/PurdueAcademicSide.png'

import './App.css';
// import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import { useMemo } from 'react';
import styled from "styled-components";

export default function App() {
  //const { isLoaded } = useLoadScript({googleMapsApiKey: "AIzaSyBpOAv7pgGXTnhaJ4PoG1hpyhdOFJ8a9II"});
  //if(!isLoaded) return <div>Loading map...</div>

  //--------------------------------------

  //padding is size
  //border-raduis is how curvy it is
  //margin is how you set the position

  //--------------------------------------
  const Button1 = styled.button`
  background-color: #FFFFE0;
  color: black;
  font-size: 10px;
  padding: 10px 10px;
  border-radius: 1px;
  margin: 100px 100px;
  cursor: pointer;
  opacity: 0.2;
  zIndex: "-1";
`;

  return (
    <div>weeee</div>,
    <Button1 onClick={openRatingPage}>
      PMU
    </Button1>,
    <div>
    <img  src={campusMap} alt="purdue campus map"/>
    </div>                                                                                                                              
  );
}

function openRatingPage() {
  //this is where we can have the button do stuff
}

/*function Map(){

  const center = useMemo(() => ({ lat: 44,  lng: 56}), []);

  return <GoogleMap zoom={10} center={center} mapContainerClassName="map_container">
    <Marker position={center} />
  </GoogleMap>
}*/
