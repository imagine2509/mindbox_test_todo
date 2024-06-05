import { styled } from '@mui/material'

export const NewTodoInputFieldContainer = styled('div')(() => ({
  width: '70%',
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  justifyContent: 'space-between',
  border: '1px solid lightgrey',
  borderRadius: '5px',
  padding: '10px',
  margin: '10px',
  backgroundColor: 'white',

  ['@media (max-width:768px)']: {
    width: '100%',
  },
}))
