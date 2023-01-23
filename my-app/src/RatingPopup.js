import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Toilet from './images/toilet-icon.jpg'
import RandomCommentsList from './RandomCommentsList.js';
import AddRatingPopup from './AddRatingPopup';

export default function RatingPopup({id, averageRating = Math.random() * 4 + 1}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const buildingAbbreviation = id.toUpperCase();

  return (
    <div>
      <Button class="toilet" id={id} onClick={handleClickOpen}>
        <img src={Toilet} alt="toilet"/>
        {/* <Typography variant="p" textAlign="center" color={"white"} fontStyle="bold">{Math.ceil(averageRating*10)/10}</Typography> */}
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Typography sx={{ m: 1 }} variant="h4" align="center">{buildingAbbreviation}</Typography>
        </DialogTitle>
        <Box sx={{display: 'flex', justifyContent: 'center', flexDirection: "row"}}>
          <Box sx={{ mr: 1, mb: 1 }} size="40">
            <Typography variant="h6" align="center">{Math.ceil(averageRating*10)/10}</Typography>
          </Box>
          <Rating name="read-only" value={averageRating} precision={0.1} size='large' readOnly />
        </Box>
        <Box sx={{display: 'flex', justifyContent: 'center', margin:1}}>
          <Typography variant='p' align='center' sx={{display: 'flex', justifyContent: 'center'}}>Popularity: </Typography>
        </Box>
        <DialogContent>
          <DialogContentText>
           <Typography variant='p' align='center' sx={{display: 'flex', justifyContent: 'center'}}>"Has slightly above average bathrooms."</Typography>
          </DialogContentText>
          <RandomCommentsList></RandomCommentsList>
        </DialogContent>
        <DialogActions>
          <AddRatingPopup id={id} />
        </DialogActions>
      </Dialog>
    </div>
  );
}