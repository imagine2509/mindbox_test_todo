/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { useContext, MouseEvent } from 'react'
import { TodosContext } from '../../../../../../context'

export const useFilterTodosPanel = () => {
    const { allTodos, filter, changeFilter, clearCompletedTodos } = useContext(TodosContext)

    const handleChangeFilter = (event: MouseEvent<HTMLElement>, newValue: 'All' | 'Active' | 'Completed') => {
        event.preventDefault()
        changeFilter(newValue)
    }

    const activeTodosCount = allTodos.map((todo) => todo.isDone).length

    const onClickClearCompleted = () => {
        clearCompletedTodos()
    }

    return {
        filter,
        activeTodosCount,
        handleChangeFilter,
        onClickClearCompleted,
    }
}
