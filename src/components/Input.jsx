import styled from 'styled-components';

export const LabeledInput = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: var(--offset-lg);
`;

export const Label = styled.label`
    font-weight: bold;
    margin-bottom: var(--offset-xs);
`;

export const Input = styled.input`
    background: var(--color-bg);
    border: 1px solid ${(props) => props.primary ? 'var(--color-primary)' : 'var(--color-secondary)'};
    padding: ${(props) => props.primary ? 'var(--offset-sm) var(--offset-md)' : 'var(--offset-xs)'};
    min-width: ${(props) => props.primary ? '400px' : 'unset'};
    ${(props) => props.as === 'textarea' && `
        resize: vertical;
        min-height: 100px;
    `}
`;

export default Input;
