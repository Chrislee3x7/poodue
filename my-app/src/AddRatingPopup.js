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
      <Button onClick={handleClickOpen}>
        Rate this bathroom
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          <Typography sx={{ m: 1 }} variant="h4" align="center">Rate: {buildingAbbreviation}</Typography>
        </DialogTitle>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <Box sx={{ mr: 1 }}>{averageRating}</Box>
          <Rating name="user-rating" value={null} precision={0.5} />
        </Box>
        <DialogContent>
          <DialogContentText>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}