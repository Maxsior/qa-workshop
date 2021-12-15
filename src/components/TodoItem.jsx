import styled from 'styled-components';

const TodoItemWrapper = styled.div`
    display: grid;
    grid-template-columns: 40px 1fr 40px;
    grid-column-gap: var(--offset-sm);
    margin-bottom: var(--offset-lg);
`;

const TodoItemTitle = styled.p`
    background: var(--color-bg);
    border: 1px solid var(--color-primary);
    padding: var(--offset-sm) var(--offset-md);
    color: var(--font-color-main);
    text-decoration: none;

    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const DeleteButton = styled.button`
    text-align: center;
    cursor: pointer;
    border: 1px solid var(--color-red);
    background-color: var(--color-bg);
    
    &::before, &::after{
        content: '';
        display: inline-block;
        position: absolute;
        width: 28px;
        border-bottom: 1px solid var(--color-red);
        transform: translate(-14px) rotate(45deg);
    }
    
    &::after {
        transform: translate(-14px) rotate(-45deg);
    }
`;


const StatusButton = styled.button`
    text-align: center;
    cursor: pointer;
    border: 1px solid ${(props) => props.done ? 'var(--color-green)' : 'var(--color-primary)'};
    background-color: var(--color-bg);
    
    &::after {
        content: '';
        display: inline-block;
        margin-bottom: 4px;

        ${(props) => props.done ? `
            width: 12px;
            height: 24px;
            border-bottom: 1px solid var(--color-green);
            border-right: 1px solid var(--color-green);
            transform: translate(0px, -2px) rotate(45deg);
        ` : `
            width: 16px;
            border-bottom: 1px solid var(--color-primary);
        `}
    }
`;

const TodoItem = ({todo, onChange, onDelete}) => {
    return (
        <TodoItemWrapper>
            <StatusButton done={todo.done} onClick={() => onChange({...todo, done: !todo.done})} />
            <TodoItemTitle>{todo.title}</TodoItemTitle>
            <DeleteButton onClick={() => onDelete(todo)}/>
        </TodoItemWrapper>
    );
}

export default TodoItem;
