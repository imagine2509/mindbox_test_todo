import { FC, ReactNode, createContext, useCallback, useEffect, useState } from 'react'
import { Todo } from '../types/entities'

type TodoContext = {
  todos: Todo[]
  allTodos: Todo[]
  filter: 'All' | 'Active' | 'Completed'
  filterTodos: (filter: 'All' | 'Active' | 'Completed') => void
  addTodo: (todo: Todo) => void
  removeTodo: (id: number) => void
  toggleTodo: (id: number) => void
  updateTodo: (id: number, text: string) => void
  changeFilter: (newValue: 'All' | 'Active' | 'Completed') => void
  clearCompletedTodos: () => void
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
  allTodos: [],
  filter: 'All',
  filterTodos: () => { },
  addTodo: () => { },
  removeTodo: () => { },
  toggleTodo: () => { },
  updateTodo: () => { },
  changeFilter: () => { },
  clearCompletedTodos: () => { },
})

export const TodosProvider: FC<TodosContextProviderProps> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos)
  const [allTodos, setAllTodos] = useState<Todo[]>(initialTodos);
  const [filter, setFilter] = useState<'All' | 'Active' | 'Completed'>('All');

  const changeFilter = (newValue: 'All' | 'Active' | 'Completed'): void => {
    setFilter(newValue);
  }

  const filterTodos = useCallback((filter: 'All' | 'Active' | 'Completed'): void => {
    let filteredTodos;
    switch (filter) {
      case 'All':
        filteredTodos = allTodos;
        break;
      case 'Active':
        filteredTodos = allTodos.filter(todo => !todo.isDone);
        break;
      case 'Completed':
        filteredTodos = allTodos.filter(todo => todo.isDone);
        break;
    }
    setTodos(filteredTodos);
  }, [allTodos])

  const addTodo = (todo: Todo): void => {
    setAllTodos([...todos, todo])
    window.sessionStorage.setItem('todoList', JSON.stringify([...allTodos, todo]));
  }

  const removeTodo = (id: number): void => {
    setAllTodos(todos.filter((todo) => todo.id !== id));
    window.sessionStorage.setItem('todoList', JSON.stringify([...(allTodos.filter((todo) => todo.id !== id))]));
  }

  const toggleTodo = (id: number): void => {
    setAllTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
    window.sessionStorage.setItem('todoList', JSON.stringify((allTodos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)))));
  }

  const updateTodo = (id: number, text: string): void => {
    setAllTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
    window.sessionStorage.setItem('todoList', JSON.stringify(setTodos(allTodos.map((todo) => (todo.id === id ? { ...todo, text } : todo)))));
  }

  const clearCompletedTodos = (): void => {
    setAllTodos(todos.filter((todo) => !todo.isDone));
    window.sessionStorage.setItem('todoList', JSON.stringify(todos.filter((todo) => !todo.isDone)));
  }

  useEffect(() => {
    const storedTodos = window.sessionStorage.getItem('todoList')
    if (storedTodos) {
      setAllTodos([...JSON.parse(storedTodos)])
    }
  }, [])

  useEffect(() => {
    filterTodos(filter);
  }, [filter, filterTodos])

  return (
    <TodosContext.Provider value={{ todos, allTodos, filter, filterTodos, addTodo, removeTodo, toggleTodo, updateTodo, changeFilter, clearCompletedTodos }}>
      {children}
    </TodosContext.Provider>
  );
}
