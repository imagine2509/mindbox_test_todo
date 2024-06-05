import { ChangeEvent, useContext, useState } from 'react'
import { TodosContext } from '../../../../../../context'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useNewTodoInputField = () => {
  const { todos, addTodo } = useContext(TodosContext)

  const [inputValue, setInputValue] = useState('')

  const onClickSaveTodo = (): void => {
    addTodo({
      id: todos.length,
      text: inputValue,
      isDone: false,
    })
  }

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }

  return {
    inputValue,
    onClickSaveTodo,
    handleInputChange,
  }
}
