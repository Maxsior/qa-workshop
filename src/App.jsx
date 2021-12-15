import React, {useCallback, useEffect, useState} from 'react';
import Title from './components/Title';
import Header from './components/Header';
import FilterPanel from './components/FilterPanel';
import ContentWrapper from './components/ContentWrapper';
import Loading from './components/Loading';
import HotProdLogo from './components/HotProdLogo';
import TodoCreate from './components/TodoCreate';
import TodoItem from './components/TodoItem';
import {useApi} from './hooks/useApi';

function App() {
    const [todos, setTodos] = useState(null);
    const [filters, setFilters] = useState({
        done: null,
        title: '',
    });

    const api = useApi();

    useEffect(() => {
        api.get().then(setTodos);
    }, []);

    const isMatchFilter = useCallback((todo) => (filters.done === null || todo.done === filters.done) && todo.title.includes(filters.title), [filters]);

    const onTodoCreate = useCallback((todo) => {
        const newTodos = todos.concat(todo)
        setTodos(newTodos);
        api.save(newTodos);
    }, [todos]);

    const onTodoChange = useCallback((updatedTodo) => {
        const newTodos = todos.map((todo) => todo.title === updatedTodo.title ? updatedTodo : todo);
        setTodos(newTodos);
        api.save(newTodos);
    }, [todos]);

    const onTodoDelete = useCallback((deletedTodo) => {
        const newTodos = todos.filter((todo) => !(todo.title === deletedTodo.title && todo.done === deletedTodo.done));
        setTodos(newTodos);
        api.save(newTodos);
    }, [todos]);

    return (
        <>
            <Header>
                <HotProdLogo />
            </Header>

            <ContentWrapper>
                <Title>Todo list</Title>

                <FilterPanel onChange={setFilters} />

                {todos
                    ? todos
                        .filter(isMatchFilter)
                        .map((todo) => <TodoItem
                            key={`${todo.title}-${todo.done}`}
                            todo={todo}
                            onChange={onTodoChange}
                            onDelete={onTodoDelete}
                        />)
                    : <Loading />
                }

                <TodoCreate onCreate={onTodoCreate} />
            </ContentWrapper>
        </>
    );
}

export default App;
