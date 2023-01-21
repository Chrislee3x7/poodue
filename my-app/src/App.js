import campusMap from './images/campusMap.png'
import Toilet from './images/toilet-icon.jpg'

import './App.css';
// import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import styled from "styled-components";
import { Button, IconButton } from "@mui/material";

export default function App() {
  
  return (
  
    <div class="container">
      <img src={campusMap} alt="campus"/>
    
        <Button class="toilet" id="arms" onClick={openRatingPage} style={{
          minWidth: "25px",
          minHeight: "25px"
        }}>
          <img
          src={Toilet} alt="toilet"
          />
        </Button>


    </div>
    
  );
}
function openRatingPage() {
  //this is where we can have the button do stuff
  alert("woo");
}
