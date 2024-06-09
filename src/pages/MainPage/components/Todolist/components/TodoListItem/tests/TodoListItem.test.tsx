import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TodoListItem } from '../TodoListItem';
import { Todo } from '../../../../../../../types/entities';

describe('TodoListItem', () => {
    let testTodo: Todo;
    let mockOnClickRemoveTodo: () => void;
    let mockOnClickToggleTodo: () => void;
    let mockOnClickUpdateTodo: () => void;

    beforeEach(() => {
        testTodo = {
            id: 1,
            text: 'Task 1',
            isDone: false,
        };
        mockOnClickRemoveTodo = vi.fn();
        mockOnClickToggleTodo = vi.fn();
        mockOnClickUpdateTodo = vi.fn();
        render(
            <TodoListItem
                todo={testTodo}
                onClickRemoveTodo={mockOnClickRemoveTodo}
                onClickToggleTodo={mockOnClickToggleTodo}
                onClickUpdateTodo={mockOnClickUpdateTodo}
            />);
    });

    it('should display todo item text', () => {
        expect(screen.getByText('Task 1')).toBeInTheDocument();
    });

    it('should toggle todo item completion', async () => {
        const checkbox = await screen.getByRole('checkbox');
        fireEvent.click(checkbox);
        const checkedIcon = await screen.findByTestId('CheckCircleOutlineIcon');
        expect(checkedIcon).toBeInTheDocument();
    });

    it('should remove todo item', async () => {
        const removeButton = await screen.findByTestId('remove-button');
        fireEvent.click(removeButton);
        expect(mockOnClickRemoveTodo).toHaveBeenCalledWith(testTodo.id);
    });

    it('should save edited todo item on Enter press', async () => {
        const todoText = await screen.findByTestId('todo-text');
        fireEvent.click(todoText);
        const input = await screen.findByTestId('todo-input');
        fireEvent.input(input, { target: { value: 'Updated Task' } });
        fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
        expect(mockOnClickUpdateTodo).toHaveBeenCalledWith(testTodo.id, 'Updated Task');
    });
});
