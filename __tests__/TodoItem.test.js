import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import TodoItem from '../src/components/TodoItem';

test('TodoItem.todo.title', () => {
    // Arrange
    const todo = {
        title: 'Test todo',
        done: false,
    };

    // Act
    render(<TodoItem todo={todo} />);

    // Accept
    expect(screen.getByText(todo.title)).toBeInTheDocument();
});
