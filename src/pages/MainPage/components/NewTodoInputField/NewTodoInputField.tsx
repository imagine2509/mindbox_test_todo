import { FC } from 'react'
import { Button } from '../../../../components/button'
import { Input } from '../../../../components/input'
import { NewTodoInputFieldContainer } from './NewTodoInputField.styles'

type NewTodoInputFieldProps = {
    inputValue: string,
    onClickSaveTodo: () => void,
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
}

export const NewTodoInputField: FC<NewTodoInputFieldProps> = ({ inputValue, onClickSaveTodo, handleInputChange }) => {
    return (
        <NewTodoInputFieldContainer>
            <Input value={inputValue} onChange={handleInputChange} />
            <Button text="Add Todo" onClick={onClickSaveTodo} />
        </NewTodoInputFieldContainer>
    )
}
