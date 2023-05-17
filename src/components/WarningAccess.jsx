import React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const WarningAccess = () => {
  return (
    <div>


        <Dialog
                open={true}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                {"Approve this document?"}
                </DialogTitle>
                <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    You're going to approve this doc ! Are you sure you will approve? 
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                <Button onClick={()=> window.location.replace("/login")}>GO TO LOGIN</Button>
                </DialogActions>
            </Dialog>
    </div>
  )
}

export default WarningAccess