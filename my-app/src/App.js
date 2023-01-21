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
    </div>

  );
}
