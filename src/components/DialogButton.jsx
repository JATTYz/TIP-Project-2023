import * as React from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { db } from '../firebase/firebaseConfig'
import { collection, doc, getDocs, getDoc, updateDoc } from 'firebase/firestore'

const DialogButton = (props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const approveDocFromPop = async (docId) => {
      // const docRef = doc(db, "raac-collection", docId);
      // await updateDoc(docRef, {isApprove: true}).then(
      //   setOpen(false)
      // )
      
      setOpen(false)
      // props.onAlert(true)
      props.onClose(true)

      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      console.log(docId);
    }


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

  const rejectDocFromPop = async (docId) => {
      const docRef = doc(db, "raac-collection", docId);
      await updateDoc(docRef, {isApprove: false, isReject: true}).then(
        setOpen(false)
      )  
      // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      console.log(docId);
      props.onAlert(true)
      // props.onClose(true)
    }
  return (
    <div key={props.id}>

        {/* CLICK TO OPEN DIALOG */}
        {props.buttonType === "approve" ? 
        <button
                key={props.id}
                onClick={() => handleClickOpen()} 
                className="w-32 bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded mr-3">
                Approve
        </button> :
         <button 
                onClick={() => handleClickOpen()}
                className="w-32 bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded mr-3">
                Reject
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
            You're going to approve this doc ! Are you sure you will approve? 
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>

          {props.buttonType === "approve" ? 
          // <Button onClick={() => approveDocFromPop(props.id)} autoFocus>Agree</Button>: 
          // <Button onClick={() => rejectDocFromPop(props.id)} autoFocus>Reject</Button>

          <Button onClick={() => approveDoc(props.id)} autoFocus>Agree</Button>: 
          <Button onClick={() => reJectDoc(props.id)} autoFocus>Reject</Button>
          }
        </DialogActions>
      </Dialog>


    </div>
  )
}

export default DialogButton