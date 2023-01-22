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
import BuildingBathroomList from './BuildingBathroomList.js';

export default function RatingPopup({id, averageRating = 3.6}) {
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
        <Typography variant="p" align="center" color="common.white">{averageRating}</Typography>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Typography variant="h4" align="center">{buildingAbbreviation}</Typography>
        </DialogTitle>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <Box sx={{ mr: 1 }}>{averageRating}</Box>
          <Rating name="read-only" value={averageRating} precision={0.1} readOnly />
        </Box>
        <DialogContent>
          <DialogContentText>
            "Has slightly above average bathrooms."
          </DialogContentText>
          <BuildingBathroomList></BuildingBathroomList>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}