import { FC } from 'react';
import { StyledInnerMainPageContainer, StyledMainPageContainer } from './MainPage.styles';
import { Todolist } from './components/Todolist';
import { NewTodoInputField } from './components/NewTodoInputField';
import { useMainPage } from './hooks/useMainPage';
import { FilterTodosPanel } from './components/FilterTodosPanel';

export const MainPage: FC = () => {
    const {
        todos,
        newTodoInputValue,
        onChangeNewTodoInput,
        onClickAddTodo,
        onClickRemoveTodo,
        onClickToggleTodo,
        onClickUpdateTodo } = useMainPage()

    return (
        <StyledMainPageContainer>
            <StyledInnerMainPageContainer>
                <NewTodoInputField
                    inputValue={newTodoInputValue}
                    onClickSaveTodo={onClickAddTodo}
                    handleInputChange={onChangeNewTodoInput}
                />
                <Todolist
                    todos={todos}
                    onClickRemoveTodo={onClickRemoveTodo}
                    onClickToggleTodo={onClickToggleTodo}
                    onClickUpdateTodo={onClickUpdateTodo}
                />
                <FilterTodosPanel />
            </StyledInnerMainPageContainer>
        </StyledMainPageContainer>
    )
}
