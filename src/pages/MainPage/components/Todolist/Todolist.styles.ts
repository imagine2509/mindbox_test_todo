import { styled } from '@mui/material'

export const StyledTodolistWrapper = styled('div')(() => ({
  width: '70%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  border: '1px solid lightgrey',
  borderBottom: '5px double lightgrey',
  paddingRight: '10px',
  paddingLeft: '10px',
  paddingBottom: '5px',

  ['@media (max-width:768px)']: {
    width: '100%',
  },
}))
