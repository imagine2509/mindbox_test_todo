import { FC } from 'react';
import { Todo } from '../../../../../../types/entities';
import { TodoListItemContainer, TodoListItemText, TodoListItemTextBlock } from './TodoListItem.styles';
import { Checkbox } from '../../../../../../components/checkbox';
import { Input } from '../../../../../../components/input';
import { useTodoListItem } from './hooks/useTodoListItem';
import { Button } from '../../../../../../components/button';

export type TodoListItemProps = {
    todo: Todo
    onClickRemoveTodo: (id: number) => void
    onClickToggleTodo: (id: number) => void
    onClickUpdateTodo: (id: number, text: string) => void
}

export const TodoListItem: FC<TodoListItemProps> = ({ todo, onClickRemoveTodo, onClickToggleTodo, onClickUpdateTodo }) => {

    const {
        inputValue,
        isEditing,
        isDone,
        handleInputChange,
        handleTodoListItemBlur,
        handleEnterPress,
        handleTodoListItemClick,
        handleTodoListItemCheckboxClick,
        handleTodoListItemRemoveClick,
    } = useTodoListItem({ todo, onClickRemoveTodo, onClickToggleTodo, onClickUpdateTodo })

    return (
        <TodoListItemContainer>
            <Checkbox
                checked={isDone}
                onChange={handleTodoListItemCheckboxClick}
            />
            {isEditing
                ? <Input
                    autoFocus
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleEnterPress}
                    onBlur={handleTodoListItemBlur}
                    inputProps={{ 'data-testid': 'todo-input' }}
                />
                : <TodoListItemTextBlock onClick={handleTodoListItemClick} data-testid="todo-text">
                    <TodoListItemText isDone={todo.isDone}>{todo.text}</TodoListItemText>
                </TodoListItemTextBlock>}
            {isEditing && <Button text="Save" onClick={handleTodoListItemBlur} data-testid="save-button" />}
            <Button text="Remove" onClick={handleTodoListItemRemoveClick} data-testid="remove-button" />

        </TodoListItemContainer>
    )
}

