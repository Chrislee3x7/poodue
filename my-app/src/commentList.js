import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';

// export function AlignListItem(id) {
//       <ListItem alignItems="flex-start">
//         <ListItemAvatar>
//           {/* <Rating name="read-only" value={value} readOnly /> */}
//           <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
//         </ListItemAvatar>
//         <ListItemText
//           primary={id}
//           secondary={
//             <React.Fragment>
//               <Typography
//                 sx={{ display: 'inline' }}
//                 component="span"
//                 variant="body2"
//                 color="text.primary"
//               >
//                 Ali Connors
//               </Typography>
//               {" — I'll be in your neighborhood doing errands this…"}
//             </React.Fragment>
//           }
//         />
//       </ListItem>
// }

export default function AlignItemsList() {

  let jsonArray;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://441c-128-210-107-129.ngrok.io/latestcomments");
  xhr.setRequestHeader('ngrok-skip-browser-warning', '8080');

  xhr.send();
  xhr.responseType = "json";  
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      jsonArray = xhr.response;
      console.log(jsonArray);
    } else {
      console.log(`Error: ${xhr.status}`);
    }
  };  



  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Rating name="read-only" size="small" value={4} readOnly />
          <Avatar alt="Lemy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Leo Pan"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {" Loved the fragrance of the restrooms"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Rating name="read-only" size="small" value={3} readOnly />
          <Avatar alt="Bemy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Benji Li"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {"Honestly mid toilets, I've experienced better."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
}