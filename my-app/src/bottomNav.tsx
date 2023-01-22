import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import React from 'react'
import { useState } from "react"
import StarIcon from "@mui/icons-material/Star"
import HistoryIcon from '@mui/icons-material/History';
import MapIcon from '@mui/icons-material/Map';
export const MuiBottomNavigation = () => {
    const [value, setValue] = useState(0);
    return (
        <BottomNavigation sx={{ width: '100%' , position: 'fixed', bottom: 0}} value = {value} 
        onChange={(event, newValue) => {
            setValue(newValue)}}
            showLabels
            >
            <BottomNavigationAction label = 'Top Rated' icon={<StarIcon/>}/>
            <BottomNavigationAction label = 'Map' icon={<MapIcon/>}/>
            <BottomNavigationAction label = 'Recent' icon={<HistoryIcon/>}/>
        </BottomNavigation>
    )
}