import { BottomNavigation, BottomNavigationAction } from "@mui/material"
import React from 'react'
import { useState } from "react"
import HomeIcon from "@mui/icons-material/Home"
import FavoriteIcon from "@mui/icons-material/Favorite"
import PersonIcon from "@mui/icons-material/Person"
export const MuiBottomNavigation = () => {
    const [value, setValue] = useState(0);
    return (
        <BottomNavigation sx={{width: '100%' , position: 'absolute', bottom: 0}} value = {value} 
        onChange={(event, newValue) => {
            setValue(newValue)}}>
            <BottomNavigationAction label = 'home' icon={<HomeIcon/>}/>
            <BottomNavigationAction label = 'favorite' icon={<FavoriteIcon/>}/>
            <BottomNavigationAction label = 'person' icon={<PersonIcon/>}/>
        </BottomNavigation>
    )
}