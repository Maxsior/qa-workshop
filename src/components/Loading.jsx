import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
    from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
`;

const Loading = styled.div`
    width: var(--offset-lg);
    height: var(--offset-lg);
    margin: auto;
    border: 1px solid var(--color-secondary);
    animation: ${rotate} 1s infinite ease-in-out;
`;

export default Loading;
