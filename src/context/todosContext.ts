import { createContext } from 'react'
import { Todo } from '../types/entities'

type TodoContext = {
  todos: Todo[]
  addTodo: (todo: Todo) => void
  removeTodo: (id: number) => void
  toggleTodo: (id: number) => void
  updateTodo: (id: number, text: string) => void
}

export const todos: Todo[] = [
  {
    id: 0,
    text: 'Внесите первое задание',
    isDone: false,
  },
]

export const addTodo = (todo: Todo): void => {
  todos.push(todo)
}

export const removeTodo = (id: number): void => {
  const index = todos.findIndex((todo) => todo.id === id)
  if (index !== -1) {
    todos.splice(index, 1)
  }
}

export const toggleTodo = (id: number): void => {
  todos.forEach((todo) => {
    if (todo.id === id) {
      todo.isDone = !todo.isDone
    }
  })
}

export const updateTodo = (id: number, text: string): void => {
  todos.forEach((todo) => {
    if (todo.id === id) {
      todo.text = text
    }
  })
}

export const TodosContext = createContext<TodoContext>({
  todos,
  addTodo,
  removeTodo,
  toggleTodo,
  updateTodo,
})
