import { styled } from '@mui/material'

interface TodoListItemTextProps {
  isDone: boolean
}

export const TodoListItemContainer = styled('div')(() => ({
  width: '100%',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid lightgrey',
}))

export const TodoListItemTextBlock = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: '100%',
  padding: '10px',
}))

export const TodoListItemText = styled('span')<TodoListItemTextProps>(
  ({ isDone }) => ({
    fontSize: '24px',
    textDecoration: isDone ? 'line-through' : 'none',
  }))
