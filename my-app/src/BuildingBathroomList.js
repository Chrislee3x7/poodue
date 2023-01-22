import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

import avatar0 from './images/poopAvatar0.png';
import avatar1 from './images/poopAvatar1.png';
import avatar2 from './images/poopAvatar2.png';
import avatar3 from './images/poopAvatar3.png';
import avatar4 from './images/poopAvatar4.png';
import avatar5 from './images/poopAvatar5.png';
import avatar6 from './images/poopAvatar6.png';
import avatar7 from './images/poopAvatar7.png';
import avatar8 from './images/poopAvatar8.png';
import avatar9 from './images/poopAvatar9.png';


export default function BuildingBathroomList() {
  
  const avatarArray = [avatar0, avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9];

  // const randomizeAvatar = () => {
  //     avatarArray[Math.random() * 9];
  // };

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          {/* <Avatar alt="ADD TOILET NAME" src={avatarArray[Math.random() * 9]} /> */}
          <Avatar alt="ADD TOILET NAME" src={avatarArray[Math.floor(Math.random() * 9)]} />
        </ListItemAvatar>
        <ListItemText
          primary="hi"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="ADD TOILET NAME" src={avatarArray[Math.floor(Math.random() * 9)]} />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="ADD TOILET NAME" src={avatarArray[Math.floor(Math.random() * 9)]} />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}