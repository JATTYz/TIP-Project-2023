import * as React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { db } from '../firebase/firebaseConfig'
import { collection, doc, getDocs, getDoc, updateDoc } from 'firebase/firestore'

const EditButton = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const approveDoc = async(docId) => {
    props.onClose(true)
    props.onAlert(true)
    props.approveType("APPROVED")
    const docRef = doc(db, "raac-collection", docId);
    await updateDoc(docRef, {isApprove: true, isPending: false}).then(
      setOpen(false)
    )
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }


    const reJectDoc = async(docId) => {
      props.onClose(true)
      props.onAlert(true)
      props.approveType("REJECTED")
      const docRef = doc(db, "raac-collection", docId);
      await updateDoc(docRef, {isApprove: false, isPending: false}).then(
        setOpen(false)
      )
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

  return (
    <div key={props.id}>

        {/* CLICK TO OPEN DIALOG */}
        {props.buttonType === "edit" ? 
        <button
                key={props.id}
                onClick={() => handleClickOpen()} 
                className="w-32 bg-yellow-500 hover:bg-yellow-400 text-white font-bold py-2 px-4 border-b-4 border-yellow-700 hover:border-yellow-500 rounded mr-3">
                EDIT
        </button> :
         <button 
                onClick={() => handleClickOpen()}
                className="w-32 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mr-3">
                Clear
        </button>

      }
          
      <Dialog
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Approve this document?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You're going to edit this document? 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>

          {props.buttonType === "edit" ? 
          <Button onClick={() => approveDoc(props.id)} autoFocus>Edit</Button>: 
          <Button onClick={() => reJectDoc(props.id)} autoFocus>Clear</Button>
          }
        </DialogActions>
      </Dialog>

    </div>
  )
}

export default EditButton