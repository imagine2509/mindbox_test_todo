import { FC } from 'react';
import { StyledHeader, StyledHeaderText } from './Header.styles';

export const Header: FC = () => {
    return (
        <StyledHeader>
            <StyledHeaderText>TODOS</StyledHeaderText>
        </StyledHeader>
    )
}
