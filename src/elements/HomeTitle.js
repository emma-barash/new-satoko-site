import styled from 'styled-components';

export const HomeTitle = styled.h1`
    margin: auto;
    font-family: julie;
    font-size: 95px;
    /* color: navajowhite; */
    padding-top: 20%;
    color: #2f0a00;
`;

export const OverlayTitle = styled(HomeTitle)`
    font-size: 25px;
    padding: 0;
    font-family: Helvetica, sans-serif;
    font-weight: lighter;
`;

export const Login = styled(HomeTitle)`
    font-size: 45px;
    font-family: julie;
    font-weight: lighter;
    padding-top: 10px;
    color: transparent;
    transition: all 0.5s ease-in;
    &:hover{
        /* color: #FFFFFF; */
        cursor: pointer;
        color: #2f0a00;
    }
`;