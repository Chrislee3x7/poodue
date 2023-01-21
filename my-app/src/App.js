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
 

  return (
  
    <div class="container">
      <img src={campusMap} alt="campus"/>
    
        <Button class="toilet" id="arms">
          <img
          src={Toilet} alt="toilet"
          />
        </Button>

        <Button class="toilet" id="walc">
          <img
          src={Toilet} alt="toilet"
          />
        </Button>
    </div>

  );
}
