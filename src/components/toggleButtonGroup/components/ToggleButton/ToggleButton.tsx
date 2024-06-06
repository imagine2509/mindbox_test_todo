import { FC } from 'react'
import { StyledToggleButton } from './ToggleButton.styles'
import { ToggleButtonProps as MuiToggleButtonProps } from '@mui/material'

interface ToggleButtonProps extends MuiToggleButtonProps {
    text: string
}

export const ToggleButton: FC<ToggleButtonProps> = ({ value, text }): JSX.Element => {
    return (
        <StyledToggleButton value={value}>{text}</StyledToggleButton>
    )
}
