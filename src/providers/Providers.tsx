import { FC, ReactNode } from 'react'
import { TodosContext } from '../context'
import { addTodo, removeTodo, todos, toggleTodo, updateTodo } from '../context/todosContext'

type ProvidersProps = {
    children: ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }) => {

    return (
        <TodosContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo, updateTodo }}>{children}</TodosContext.Provider>)
}
