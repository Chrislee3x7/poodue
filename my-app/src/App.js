import campusMap from './images/campusMap.png'

import './App.css';
// import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import styled from "styled-components";
import { Button } from "@mui/material";

export default function App() {

  //--------------------------------------

  //padding is size
  //border-raduis is how curvy it is
  //margin is how you set the position

  //--------------------------------------

  return (
  
    <div class="container">
      <img src={campusMap} alt="campus"/>

      <Button class="arms" onClick={openRatingPage}>ARMS</Button>
    </div>
    
  );
}
function openRatingPage() {
  //this is where we can have the button do stuff
  alert("woo");
}
