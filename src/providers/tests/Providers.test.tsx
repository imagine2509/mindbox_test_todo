import { render, screen } from '@testing-library/react';
import { Providers } from '../Providers';
import { useContext } from 'react';
import { TodosContext } from '../../context';
import '@testing-library/jest-dom';

const TestingComponent = (): JSX.Element => {
    const { todos } = useContext(TodosContext);

    return (
        <>
            <p>{todos[0]?.id.toString()}</p>
        </>
    );
};


describe('Провайдеры', () => {
    test('Провайдеры должны давать доступ к контексту тудушников c начальным значением', () => {
        render(
            <Providers>
                <TestingComponent />
            </Providers>)

        expect(screen.getByText('0')).toBeVisible();
    })
})
