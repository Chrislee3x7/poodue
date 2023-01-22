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


export default function RandomCommentsList() {
  
  const avatarArray = [avatar0, avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9];

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          {/* <Avatar alt="ADD TOILET NAME" src={avatarArray[Math.random() * 9]} /> */}
          <Avatar alt="Random user 1" src={avatarArray[Math.floor(Math.random() * 9)]} />
        </ListItemAvatar>
        <ListItemText
          primary="Solid toilet seats"
          secondary={
            <React.Fragment>
              {"The toilet seat shape was very comfortable. I had an overall positive experience"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Random user 2" src={avatarArray[Math.floor(Math.random() * 9)]} />
        </ListItemAvatar>
        <ListItemText
          primary="Not very clean..."
          secondary={
            <React.Fragment>
              {"I really go, but the toilets were not clean at all. Would not recommend."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Random user 3" src={avatarArray[Math.floor(Math.random() * 9)]} />
        </ListItemAvatar>
        <ListItemText
          primary="Auto-flush too sensitive D:<"
          secondary={
            <React.Fragment>
              {"Unironically shit experience, the auto-flushing toilet is WAY too sensitive. I kept gettin my ass jump scared by that shit."}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}