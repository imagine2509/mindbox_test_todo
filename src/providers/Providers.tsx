import { FC, ReactNode } from 'react'
import { TodosProvider } from '../context/todosContext'

type ProvidersProps = {
    children: ReactNode
}

export const Providers: FC<ProvidersProps> = ({ children }) => {

    return (
        <TodosProvider>{children}</TodosProvider>
    )
}
