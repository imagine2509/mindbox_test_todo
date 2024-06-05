import { ChangeEvent, KeyboardEvent, useState } from 'react'
import { TodoListItemProps } from '../../TodoListItem'

export const useTodoListItem = ({
  todo,
  onClickRemoveTodo,
  onClickToggleTodo,
  onClickUpdateTodo,
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
}: TodoListItemProps) => {
  const [inputValue, setInputValue] = useState(todo.text)
  const [isEditing, setIsEditing] = useState(false)
  const [isDone, setIsDone] = useState(todo.isDone)

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }

  const handleTodoListItemClick = (): void => {
    setIsEditing(true)
  }

  const handleTodoListItemBlur = (): void => {
    setIsEditing(false)
    onClickUpdateTodo(todo.id, inputValue)
  }

  const handleEnterPress = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      handleTodoListItemBlur()
    }
  }

  const handleTodoListItemCheckboxClick = (): void => {
    setIsDone(!isDone)
    onClickToggleTodo(todo.id)
  }

  const handleTodoListItemRemoveClick = (): void => {
    onClickRemoveTodo(todo.id)
  }

  return {
    inputValue,
    isEditing,
    isDone,
    handleInputChange,
    handleEnterPress,
    handleTodoListItemClick,
    handleTodoListItemBlur,
    handleTodoListItemCheckboxClick,
    handleTodoListItemRemoveClick,
  }
}
