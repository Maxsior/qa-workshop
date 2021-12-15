import React, {useCallback, useState} from 'react';
import styled from 'styled-components';
import Input from './Input';

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-column-gap: var(--offset-md);
    margin-bottom: var(--offset-lg);
`;

const FilterPanel = ({ onChange = () => null }) => {
    const [filters, setFilters] = useState({
        title: '',
        done: null
    });

    const doChange = useCallback(
        (field, mapper = (v) => v) => (e) => setFilters((prev) => {
            const newState = {...prev, [field]: mapper(e.target.value)};
            onChange(newState);
            return newState;
        }),
        [onChange]
    );


    return (
        <Wrapper>
            <Input
                placeholder="Search"
                value={filters.search}
                onChange={doChange('title')}
            />

            <Input
                as="select"
                value={filters.status}
                onChange={doChange('done', (v) => v === 'all' ? null : v === 'done')}
            >
                <option value="all">All</option>
                <option value="done">Done</option>
                <option value="incomplete">Incomplete</option>
            </Input>
        </Wrapper>
    );
}

export default FilterPanel;
