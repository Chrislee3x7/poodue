import campusMap from './images/campusMap.png'
<<<<<<< HEAD
import React, { useState } from "react";
import RatingPopup from './RatingPopup'

=======
import Toilet from './images/toilet-icon.jpg'
>>>>>>> 64b49c731e18d7562769e4ffef6625c9a2fbb5ab

import './App.css';
// import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import styled from "styled-components";
import { Button, IconButton } from "@mui/material";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
 
  const toggleRatingPopup = () => {
    setIsOpen(!isOpen);
    //alert("woo");
  }

  //--------------------------------------

  //padding is size
  //border-raduis is how curvy it is
  //margin is how you set the position

  //--------------------------------------

  return (
  
    
    <div class="container">
      <img src={campusMap} alt="campus"/>
    
        <Button class="toilet" id="arms" onClick={openRatingPage}>
          <img
          src={Toilet} alt="toilet"
          />
        </Button>

        <Button class="toilet" id="walc" onClick={openRatingPage}>
          <img
          src={Toilet} alt="toilet"
          />
        </Button>


      <Button class="arms" onClick={toggleRatingPopup}>ARMS</Button>
    
      <RatingPopup></RatingPopup>
      
    </div>

  );
}
