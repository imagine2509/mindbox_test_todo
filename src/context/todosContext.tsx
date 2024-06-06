import { FC, ReactNode, createContext, useEffect, useState } from 'react'
import { Todo } from '../types/entities'

type TodoContext = {
  todos: Todo[]
  addTodo: (todo: Todo) => void
  removeTodo: (id: number) => void
  toggleTodo: (id: number) => void
  updateTodo: (id: number, text: string) => void
}

type TodosContextProviderProps = {
  children: ReactNode
}

export const initialTodos: Todo[] = [
  {
    id: 0,
    text: 'Внесите первое задание',
    isDone: false,
  },
]

export const TodosContext = createContext<TodoContext>({
  todos: [],
  addTodo: () => { },
  removeTodo: () => { },
  toggleTodo: () => { },
  updateTodo: () => { },
})

export const TodosProvider: FC<TodosContextProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)

  useEffect(() => {
    const storedTodos = window.sessionStorage.getItem('todoList')
    if (storedTodos) {
      setTodos([...JSON.parse(storedTodos)])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const addTodo = (todo: Todo): void => {
    setTodos([...todos, todo])
    window.sessionStorage.setItem('todoList', JSON.stringify([...todos, todo]));
  }

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
    window.sessionStorage.setItem('todoList', JSON.stringify([...(todos.filter((todo) => todo.id !== id))]));
  }

  const toggleTodo = (id: number): void => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
    window.sessionStorage.setItem('todoList', JSON.stringify((todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)))));
  }

  const updateTodo = (id: number, text: string): void => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
    window.sessionStorage.setItem('todoList', JSON.stringify(setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)))));
  }

  return (
    <TodosContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo, updateTodo }}>
      {children}
    </TodosContext.Provider>
  );
}
