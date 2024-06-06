import { styled } from '@mui/material';

export const FilterTodosPanelContainer = styled('div')(() => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    border: '1px solid lightgrey',
    borderBottom: '5px double lightgrey',
    padding: '10px',
}))

export const StyledActiveTodosCounter = styled('span')(() => ({
    fontSize: '16px',
    opacity: 0.7,
}))
