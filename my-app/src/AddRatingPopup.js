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
import { useState } from 'react';

export default function RatingPopup({id}) {
  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  


  const [message, setMessage] = useState('');

  const handleChange = event => {
      setMessage(event.target.value);
  }


  const handleSubmit = () => {

    const xhr = new XMLHttpRequest();
    xhr.open("POST", "https://441c-128-210-107-129.ngrok.io/reviewcreate");
    xhr.setRequestHeader('ngrok-skip-browser-warning', '8080');
    xhr.setRequestHeader('Content-Type', 'application/json')

    const obj = {
      location: id.toUpperCase(),
      toiletRating: value,
      sinkRating: value,
      noiseRating: value,
      comment: message
      }
    const body = JSON.stringify(obj);
      console.log(body);

      xhr.onload = () => {
      var data = JSON.parse(xhr.responseText);
      if (xhr.readyState == 4 && xhr.status == "200") {
        console.log(data);
      } else {
        console.log(`Error: ${xhr.status}`);
      }
    };
    xhr.send(body);

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
          <Typography sx={{ m: 1 }} variant="h4" align="center">Rate {buildingAbbreviation}</Typography>
        </DialogTitle>
        <Box sx={{display: 'flex', justifyContent: 'center'}}>
          <Rating
            name="user-controlled-rating"
            value={value}
            size='large'
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            />
        </Box>
        <DialogContent>
          <DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Add comment"
                type="text"
                multiline
                rows={1}
                fullWidth
                variant="standard"
                onChange={handleChange}
                value={message}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}