import styled from 'styled-components';

export const StyledUsername = styled.input`
    margin: 15px auto;
    width: 250px;
    padding: 5px auto;
    display: block;
    text-align: center;
    border-radius: 10px 20px;
    &:focus{
        outline: none;
    }
`;

export const StyledPassword = styled(StyledUsername)`
    margin: auto;
`;