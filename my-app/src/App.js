import campusMap from './images/campusMap.png'
import campusMap2 from './images/VectorStyleCampusMap.png'
import React, { useState } from "react";
import RatingPopup from './RatingPopup'
import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import './App.css';
import StarIcon from "@mui/icons-material/Star"
import HistoryIcon from '@mui/icons-material/History';
import MapIcon from '@mui/icons-material/Map';
import VirtualizedList from './scroller.tsx';
import AlignItemsList from './commentList';
import PrimarySearchAppBar from './searchBar';

export default function App() {
  const [active, setActive] = useState("1C");
  const [value, setValue] = useState(0);
 

return (
    <div className='app'>
      {active === "1C" && <div class="container">
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

        </div>}
      {active === "2C" && <VirtualizedList></VirtualizedList>}
      {active === "3C" && <AlignItemsList></AlignItemsList>}

      {active === "1C" && <PrimarySearchAppBar></PrimarySearchAppBar>}
      <BottomNavigation sx={{ width: '100%' , position: 'fixed', bottom: 0}} value = {value} 
        onChange={(event, newValue) => {
            setValue(newValue)}}
            showLabels
            >
            <BottomNavigationAction onClick={() => setActive("1C")}  label = 'Map' icon={<MapIcon/>}/>
            <BottomNavigationAction onClick={() => setActive("2C")}  label = 'Top Rated' icon={<StarIcon/>}/>
            <BottomNavigationAction onClick={() => setActive("3C")}  label = 'Recent' icon={<HistoryIcon/>}/>
        </BottomNavigation>
      
    </div>
  );
}
