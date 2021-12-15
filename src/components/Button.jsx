import styled from 'styled-components';

const Button = styled.button`
    text-align: center;
    cursor: pointer;
    padding: var(--offset-sm) var(--offset-md);
    text-decoration: none;
    border: 1px solid var(--color-primary);
    background: ${(props) => props.primary ? 'var(--color-primary)' : 'var(--color-bg)'};
    color: var(--font-color-main);
    
    background: var(--color-primary);
    color: var(--font-color-primary);
`;

export const ButtonGroup = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: var(--offset-lg);
`;

export default Button;
