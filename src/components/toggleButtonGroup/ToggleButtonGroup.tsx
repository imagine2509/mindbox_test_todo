import { FC, MouseEvent } from 'react'
import { ToggleButtonGroup, ToggleButtonProps as MuiToggleButtonProps } from '@mui/material'
import { ToggleButton } from './components/ToggleButton'

interface ToggleButtonProps extends MuiToggleButtonProps {
    value: string
    buttonTextOptions: string[]
    handleChange: (event: MouseEvent<HTMLElement>, newValue: 'All' | 'Active' | 'Completed') => void
}

export const ToggleButtons: FC<ToggleButtonProps> = ({ value, buttonTextOptions, handleChange }): JSX.Element => {
    return (
        <ToggleButtonGroup
            exclusive
            value={value}
            onChange={handleChange}
        >
            {buttonTextOptions.map((option, index) => {
                return (
                    <ToggleButton
                        key={`${index}-${option}`}
                        value={option}
                        text={option}
                        selected={option === value}
                    />
                )
            })}
        </ToggleButtonGroup>
    )
}
