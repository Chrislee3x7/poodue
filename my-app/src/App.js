import campusMap from './images/campusMap.png'
import React, { useState } from "react";
import RatingPopup from './RatingPopup'


import './App.css';
// import { GoogleMap, useLoadScript, Marker} from "@react-google-maps/api"
import styled from "styled-components";
import { Button } from "@mui/material";

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

      <Button class="arms" onClick={toggleRatingPopup}>ARMS</Button>
    
      <RatingPopup></RatingPopup>
      
    </div>

  );
}
