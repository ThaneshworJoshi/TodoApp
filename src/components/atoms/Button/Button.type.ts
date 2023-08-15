import { ButtonProps as MuiButtonProps } from '@mui/material'

export type TButton = {
  loading?: boolean
} & MuiButtonProps

export type ButtonProps = TButton
