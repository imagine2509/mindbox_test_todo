import { TextField, TextFieldProps } from '@mui/material'
import { FC } from 'react'

export const Input: FC<TextFieldProps> = (props) => {
    return (
        <TextField fullWidth {...props} />
    )
}
