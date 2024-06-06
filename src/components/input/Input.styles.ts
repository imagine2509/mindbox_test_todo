import { TextField, styled } from '@mui/material';

export const StyledInput = styled(TextField)(() => ({
    padding: '10px',
    border: 'none',

    '& .MuiTextField-root': {
        padding: 0,
    },
    '& .MuiInputBase-root': {
        backgroundColor: 'transparent',
        fontSize: '24px',
        fontFamily: 'unset',
        lineHeight: 1.15,
        '&.Mui-focused:not(.Mui-disabled):not(.Mui-error)': {
            outline: 'none',
        },
    },
    '& .MuiInputBase-input': {
        padding: 0,
        boxSizing: 'border-box',
    },

    '& .MuiFilledInput-input:focus': {
        outline: 'none',
    },
}))
