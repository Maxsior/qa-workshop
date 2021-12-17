import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import TodoItem from '../src/components/TodoItem';

let container = null;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

test('TodoItem.todo.done', () => {
    // Arrange
    const todo = {
        title: 'Test todo',
        done: false,
    };

    // Act
    act(() => {
        render(<TodoItem todo={todo} />, container);
    });

    // Accept
    expect(container.textContent).toBe(todo.title);
});
