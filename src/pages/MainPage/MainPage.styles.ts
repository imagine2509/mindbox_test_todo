import { styled } from '@mui/material'

export const StyledMainPageContainer = styled('main')(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
}))

export const StyledInnerMainPageContainer = styled('div')(() => ({
  width: '70%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  ['@media (max-width:768px)']: {
    width: '100%',
  },
}))
