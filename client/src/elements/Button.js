import styled from 'styled-components';

export const AuthB = styled.button`
    margin: 10px auto 5px auto;
    border: none;
    font-family: julie;
    font-size: 40px;
    background: transparent;
    color: #FFFFFF;
    transition: color 0.3s linear;
    &:focus{
        outline: none;
    }
    &:hover{
        cursor: pointer;
        color: #2f0a00;
    }
`;