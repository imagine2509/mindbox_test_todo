import { useCallback, useContext, useState } from 'react'
import { TodosContext } from '../../../../context'
import { Todo } from '../../../../types/entities'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useMainPage = () => {
  const { todos, addTodo, removeTodo, toggleTodo, updateTodo } =
    useContext(TodosContext)

  const [newTodoInputValue, setNewTodoInputValue] = useState('')

  const onClickAddTodo = useCallback(() => {
    if (!newTodoInputValue) {
      return
    }
    const newTodo: Todo = {
      id: Date.now(),
      text: newTodoInputValue,
      isDone: false,
    }
    addTodo(newTodo)
    setNewTodoInputValue('')
  }, [newTodoInputValue, addTodo])

  const onClickRemoveTodo = useCallback(
    (id: number) => {
      removeTodo(id)
    },
    [removeTodo])

  const onClickToggleTodo = useCallback(
    (id: number) => {
      toggleTodo(id)
    }, [toggleTodo])

  const onChangeNewTodoInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewTodoInputValue(event.target.value)
    }, [])

  const onClickUpdateTodo = useCallback(
    (id: number, text: string) => {
      updateTodo(id, text)
    }, [updateTodo])

  return {
    todos,
    newTodoInputValue,
    onClickAddTodo,
    onClickRemoveTodo,
    onClickToggleTodo,
    onChangeNewTodoInput,
    onClickUpdateTodo,
  }
}
