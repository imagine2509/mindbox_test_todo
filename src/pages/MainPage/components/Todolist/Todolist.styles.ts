import { styled } from '@mui/material'

export const StyledTodolistWrapper = styled('div')(() => ({
  width: '70%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'white',
  border: '1px solid gray',
  borderBottom: '5px double gray',
  padding: '10px',

  ['@media (max-width:768px)']: {
    width: '100%',
  },
}))
