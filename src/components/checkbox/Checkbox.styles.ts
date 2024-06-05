import { Checkbox, styled } from '@mui/material'

export const StyledCheckbox = styled(Checkbox)(() => ({
  color: 'green',
  padding: '0',

  '&:hover': {
    backgroundColor: 'transparent',
  },
}))
