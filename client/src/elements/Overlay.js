import styled from 'styled-components';

export const AboutSquare = styled.div`
    width: 100vw;
    height: 45%;
    margin-top: 7%;
    text-align: center;
    /* position: relative; */
    background-image: linear-gradient(rgb(255, 255, 255, 0.7), rgb(255, 255, 255, 0.7));
`;

export const ASTwo = styled(AboutSquare)`
margin-top: 5%;
`;

export const ASThree = styled(AboutSquare)`
    margin-top: 5%;
    margin-bottom: 10px;
`;

export const IMG = styled(AboutSquare)`
    padding-top: 16px;
    padding-right: 6px;
    margin-top: 15px;
    position: relative;
    height: 40%;
    float: right;
    width: 18vw;
    margin-right: 15px;
    border-radius: 50px;
    background-image: linear-gradient(rgb(47, 10, 0, 0.65), rgb(47, 10, 0, 0.65))
`;