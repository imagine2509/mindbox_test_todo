import { FC } from 'react';
import { StyledMainPageContainer } from './MainPage.styles';
import { Todolist } from './components/Todolist';
import { NewTodoInputField } from './components/NewTodoInputField';
import { useMainPage } from './hooks/useMainPage';

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
        </StyledMainPageContainer>
    )
}
