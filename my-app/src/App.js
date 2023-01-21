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


      <Button class="arms" onClick={toggleRatingPopup}>ARMS</Button>
    
      <RatingPopup></RatingPopup>
      
    </div>

  );
}
