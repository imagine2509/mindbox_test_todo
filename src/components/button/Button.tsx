import cn from 'classnames'
import { FC } from 'react'
import { ButtonProps as MuiButtonProps } from '@mui/material/Button/Button'
import { StyledButton } from './Button.styles'

export interface ButtonProps extends MuiButtonProps {
    text: string
}

export const Button: FC<ButtonProps> = ({
    text,
    color = 'primary',
    variant = 'text',
    size = 'medium',
    ...props }) => {
    return (
        <StyledButton
            {...props}
            variant={variant}
            className={cn('button', color, `button--${size}`, props.className)}
        >
            {text}
        </StyledButton>
    )
}

