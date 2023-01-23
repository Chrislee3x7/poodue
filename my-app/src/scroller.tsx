import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

function renderRow(props: ListChildComponentProps) {
  const { index, style } = props;

 const names = ["frny", "pgnw", "wang",
  
  "hovd",
  
  "ellt",
  
  "haas",
  
  "lwsn",
  
  "ar",
  
  "chas",
  "dscb",
  
  "jnsn", 
  "msee", 
  
  "phys", 
  
  "rhph",
  
  "push",
  
  "hamp" ,
  
  "arms" ,
  
  "walc" ,
  
  "ston" ,
  
  "univ",
  
  "schm" ,
  
  "mthw" ,
  
  "brng" ,
  
  "math" ,
  "cl50" ,
  
  "prce",
  
  "psyc" ,
  
  "sc" ,
  
  "wthr" ,
  
  "brwn" ,
  
  "heav" ,
  
  "stew" ,
  "hiks" ,
  
  "pmu" ,
  
  "pmuc" ,
  
  "gris" ,
  
  "uc" ,
  
  "baly" ,
  
  "dudl" ,
  "lmbs" ,
  
  "knoy" ,
  
  "potr",
  
  "me",
  
  "bhee" ,
  
  "mrrt"];

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`${index + 1} : ${names[index].toUpperCase()}`} />
      </ListItemButton>
    </ListItem>
  );
}

function setWidthToZero() {
    
}

export default function VirtualizedList() {
  return (
    <Box
      sx={{ width: '100vw', height: 'auto', position: 'absolute', top:0, bgcolor: 'background.paper' }}
    >
      <FixedSizeList
        height={2640}
        width={'100vw'}
        itemSize={60}
        itemCount={44}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}