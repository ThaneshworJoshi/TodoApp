import React, { FC } from 'react'
import { ButtonProps } from './Button.type'
import { LoadingButton as MuiButton } from '@mui/lab'

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'contained',
  startIcon,
  endIcon,
  loading,
  color = 'primary',
  size = 'medium',
  ...rest
}) => {
  return (
    <MuiButton
      disableRipple
      variant={variant}
      startIcon={startIcon}
      endIcon={endIcon}
      size={size}
      color={color}
      loading={loading}
      {...rest}
    >
      {children}
    </MuiButton>
  )
}

export default Button
