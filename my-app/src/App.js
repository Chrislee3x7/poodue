import campusMap from './images/campusMap.png'
import React, { useState } from "react";
import RatingPopup from './RatingPopup'

import Toilet from './images/toilet-icon.jpg'

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
    
      <RatingPopup id="walc"></RatingPopup>
      <RatingPopup id="arms"></RatingPopup>
      
    </div>

  );
}
