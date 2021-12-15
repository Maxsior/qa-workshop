import {useState} from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';

const TodoCreateWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: var(--offset-sm);
    margin-top: var(--offset-lg);
`;

const TodoCreate = ({onCreate}) => {
    const [value, setValue] = useState('');

    return (
        <TodoCreateWrapper>
            <Input
                primary
                required
                name="title"
                placeholder="New todo"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <Button primary onClick={() => {
                onCreate({
                    title: value,
                    done: false,
                });
                setValue('');
            }
            }>Add todo</Button>
        </TodoCreateWrapper>
    );
}

export default TodoCreate;




