import React from 'react'

export interface ModalProps {
  title: string
  open: boolean
  onClose: () => void
  confirmData?: {
    label: string
    onConfirm: () => void
  }
  children?: React.ReactNode
}
