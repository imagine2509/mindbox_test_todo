import { useCallback, useContext, useState } from 'react'
import { TodosContext } from '../../../../context'
import { Todo } from '../../../../types/entities'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const useMainPage = () => {
  const { todos, addTodo, removeTodo, toggleTodo, updateTodo } =
    useContext(TodosContext)

  const [todoList, setTodoList] = useState<Todo[]>(todos)
  const [newTodoInputValue, setNewTodoInputValue] = useState('')

  const onClickAddTodo = useCallback(() => {
    const newTodo: Todo = {
      id: todos.length,
      text: newTodoInputValue,
      isDone: false,
    }
    addTodo(newTodo)
    setTodoList([...todos])
  }, [newTodoInputValue, addTodo, todos])

  const onClickRemoveTodo = useCallback((id: number) => {
    removeTodo(id)
    setTodoList([...todos])
  }, [removeTodo, todos])

  const onClickToggleTodo = useCallback((id: number) => {
    toggleTodo(id)
    setTodoList([...todos])
  }, [todos, toggleTodo])

  const onChangeNewTodoInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setNewTodoInputValue(event.target.value)
    },
    [])

  const onClickUpdateTodo = useCallback((id: number, text: string) => {
    updateTodo(id, text)
    setTodoList([...todos])
  }, [todos, updateTodo])

  return {
    todoList,
    newTodoInputValue,
    onClickAddTodo,
    onClickRemoveTodo,
    onClickToggleTodo,
    onChangeNewTodoInput,
    onClickUpdateTodo,
  }
}
