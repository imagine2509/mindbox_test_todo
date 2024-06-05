import { CheckboxProps } from '@mui/material';
import { FC } from 'react';
import { StyledCheckbox } from './Checkbox.styles';
import CircleChecked from '@mui/icons-material/CheckCircleOutline';
import CircleUnchecked from '@mui/icons-material/RadioButtonUnchecked';

export const Checkbox: FC<CheckboxProps> = (props) => {
    return (
        <StyledCheckbox {...props} disableRipple icon={<CircleUnchecked />} checkedIcon={<CircleChecked />} />
    )
}

