import campusMap from './images/campusMap.png'
import React, { useState } from "react";
import RatingPopup from './RatingPopup'
import Button from '@mui/material/Button'

import './App.css';
import styled from "styled-components";
import { Box, BottomNavigation, BottomNavigationAction} from "@mui/material";

export default function App() {
  const [isZoomed, setIsZoomed] = useState(false);
 
  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
        <div class="container">
          <div>
          <img src={campusMap} alt="campus"/>

          <RatingPopup id="frny"></RatingPopup>
          <RatingPopup id="pgnw"></RatingPopup>
          <RatingPopup id="wang"></RatingPopup>
          <RatingPopup id="hovd"></RatingPopup>
          <RatingPopup id="ellt"></RatingPopup>
          <RatingPopup id="haas"></RatingPopup>
          <RatingPopup id="lwsn"></RatingPopup>
          <RatingPopup id="ar"></RatingPopup>
          <RatingPopup id="chas"></RatingPopup>
          <RatingPopup id="dscb"></RatingPopup>
          <RatingPopup id="jnsn"></RatingPopup>
          <RatingPopup id="msee"></RatingPopup>
          <RatingPopup id="phys"></RatingPopup>
          <RatingPopup id="rhph"></RatingPopup>
          <RatingPopup id="push"></RatingPopup>
          <RatingPopup id="hamp"></RatingPopup>
          <RatingPopup id="walc"></RatingPopup>
          <RatingPopup id="arms"></RatingPopup>

          <RatingPopup id="ston"></RatingPopup>
          <RatingPopup id="univ"></RatingPopup>
          <RatingPopup id="schm"></RatingPopup>
          <RatingPopup id="mthw"></RatingPopup>
          <RatingPopup id="brng"></RatingPopup>
          <RatingPopup id="math"></RatingPopup>
          <RatingPopup id="cl50"></RatingPopup>
          <RatingPopup id="prce"></RatingPopup>
          <RatingPopup id="psyc"></RatingPopup>
          <RatingPopup id="sc"></RatingPopup>
          <RatingPopup id="wthr"></RatingPopup>
          <RatingPopup id="brwn"></RatingPopup>
          <RatingPopup id="heav"></RatingPopup>
          <RatingPopup id="stew"></RatingPopup>
          <RatingPopup id="hiks"></RatingPopup>
          <RatingPopup id="pmu"></RatingPopup>
          <RatingPopup id="pmuc"></RatingPopup>
          <RatingPopup id="gris"></RatingPopup>
          <RatingPopup id="uc"></RatingPopup>
          <RatingPopup id="baly"></RatingPopup>
          <RatingPopup id="dudl"></RatingPopup>
          <RatingPopup id="lmbs"></RatingPopup>
          <RatingPopup id="knoy"></RatingPopup>
          <RatingPopup id="potr"></RatingPopup>
          <RatingPopup id="me"></RatingPopup>
          <RatingPopup id="bhee"></RatingPopup>
          <RatingPopup id="mrrt"></RatingPopup>
          </div>
        </div>
        
  );
}
