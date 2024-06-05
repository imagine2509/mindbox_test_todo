import { styled } from '@mui/material'

export const StyledHeader = styled('header')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50px',
}))

export const StyledHeaderText = styled('span')(() => ({
  fontSize: '36px',
  fontWeight: 'lighter',
  color: 'black',
  opacity: 0.4,
}))
