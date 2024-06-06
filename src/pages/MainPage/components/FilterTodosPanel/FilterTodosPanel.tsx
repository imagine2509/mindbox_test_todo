import { FC } from 'react';
import { FilterTodosPanelContainer, StyledActiveTodosCounter } from './FilterTodosPanel.styles';
import { useFilterTodosPanel } from './hooks/useFilterTodosPanel';
import { ToggleButtons } from '../../../../components/toggleButtonGroup';
import { Button } from '../../../../components/button';

export const FilterTodosPanel: FC = () => {
    const { filter, activeTodosCount, handleChangeFilter, onClickClearCompleted } = useFilterTodosPanel()

    return (
        <FilterTodosPanelContainer>
            <StyledActiveTodosCounter>
                {`${activeTodosCount} items left`}
            </StyledActiveTodosCounter>
            <ToggleButtons
                buttonTextOptions={['All', 'Active', 'Completed']}
                value={filter}
                handleChange={handleChangeFilter}
                fullWidth
            />
            <Button text='Clear completed' onClick={onClickClearCompleted} />
        </FilterTodosPanelContainer>
    )
}
