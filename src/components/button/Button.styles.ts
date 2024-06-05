import { Button, styled } from '@mui/material'

export const StyledButton = styled(Button)(() => ({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '8px',
  boxShadow: 'unset',
  textTransform: 'unset',
  color: 'black',
  textWrap: 'nowrap',

  '&:hover': {
    border: '1px solid blue',
  },

  '&.button--medium': {
    height: '36px',
    padding: '0 16px',
    fontSize: '14px',
    lineHeight: '24px',
    fontWeight: '400',
  },
}))
