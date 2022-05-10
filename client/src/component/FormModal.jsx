import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({open, handleClose, children, handleProceed, title, subtitle, loading}) {

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{title}</DialogTitle>
        <form action="" onSubmit={handleProceed}>
        <DialogContent>
          <DialogContentText>
            {subtitle}
          </DialogContentText>
          {children}
        </DialogContent>
        <DialogActions>
          {loading ? <p>Loading....</p> : <>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleProceed} type='submit'>Submit</Button>
          </>}
        </DialogActions>

        </form>
      </Dialog>
    </div>
  );
}
