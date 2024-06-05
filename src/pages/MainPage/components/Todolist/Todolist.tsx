import { FC, memo } from 'react'
import { StyledTodolistWrapper } from './Todolist.styles'
import { TodoListItem } from './components/TodoListItem'
import { Todo } from '../../../../types/entities'

export type TodolistProps = {
    todos: Todo[]
    onClickRemoveTodo: (id: number) => void
    onClickToggleTodo: (id: number) => void
    onClickUpdateTodo: (id: number, text: string) => void
}

export const Todolist: FC<TodolistProps> = memo(({ todos, onClickRemoveTodo, onClickToggleTodo, onClickUpdateTodo }) => {
    return (
        <StyledTodolistWrapper>
            {todos.map((todo) => {
                return (<TodoListItem
                    key={todo.id}
                    todo={todo}
                    onClickRemoveTodo={onClickRemoveTodo}
                    onClickToggleTodo={onClickToggleTodo}
                    onClickUpdateTodo={onClickUpdateTodo}
                />)
            })}
        </StyledTodolistWrapper>
    )
})

