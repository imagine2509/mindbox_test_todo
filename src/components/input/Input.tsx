import { TextFieldProps } from '@mui/material'
import { FC } from 'react'
import { StyledInput } from './Input.styles'

export const Input: FC<TextFieldProps> = (props) => {
    return (
        <StyledInput fullWidth {...props} variant='filled' />
    )
}
