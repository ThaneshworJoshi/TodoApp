import React, { FC } from 'react'
import { TextField as MuiTextField } from '@mui/material'
import { TextFieldProps } from './TextField.type'

export const TextField: FC<TextFieldProps> = (props) => (
  <MuiTextField {...props} />
)

export default TextField
