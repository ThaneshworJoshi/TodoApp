import React from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { Button } from '../../atoms'
import { ModalProps } from './Modal.type'

export const Modal = ({
  title,
  open,
  onClose,
  confirmData,
  children,
}: ModalProps) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      {title && <DialogTitle id="alert-dialog-title">{title}</DialogTitle>}
      {children && (
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {children}
          </DialogContentText>
        </DialogContent>
      )}
      {confirmData && (
        <DialogActions>
          <Button onClick={onClose} variant="outlined">
            Cancel
          </Button>
          <Button onClick={confirmData.onConfirm} autoFocus color="warning">
            {confirmData.label}
          </Button>
        </DialogActions>
      )}
    </Dialog>
  )
}

export default Modal
