import styled from 'styled-components';

export const AboutSquare = styled.div`
    width: 55vw;
    height: auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
    justify-items: center;
    margin: 7% auto auto auto;
    border-radius: 50px;
    padding: 30px;
    text-align: center;
    /* position: relative; */
    /* background-image: linear-gradient(transparent, rgb(255, 255, 255, 0.6), rgb(255, 255, 255, 0.7), rgb(255, 255, 255, 0.7)); */
    background-image: linear-gradient(rgb(255, 255, 255, 0.8), rgb(255, 255, 255, 0.8));
`;

export const ASTwo = styled(AboutSquare)`
margin-top: 5%;
`;

export const ASThree = styled(AboutSquare)`
    margin-top: 5%;
    margin-bottom: 10px;
`;

export const IMG = styled(AboutSquare)`
    padding-left: 20px;
    margin-top: 10px;
    position: relative;
    height: 45%;
    float: right;
    width: 19vw;
    margin-right: 10px;
    border-radius: 50px;
    background-image: linear-gradient(rgb(47, 10, 0, 0.65), rgb(47, 10, 0, 0.65));
`;

export const ImgWrapper = styled(AboutSquare)`
    height: 40%;
    width: 18vw;
    background-image: linear-gradient(rgb(47, 10, 0, 0.65), rgb(47, 10, 0, 0.65));
    margin: auto;
`;

export const FormWrapper = styled(AboutSquare)`
    background-image: linear-gradient(rgb(47, 10, 0, 0.65), rgb(47, 10, 0, 0.65));
    position: absolute;
    top: 175px;
    left: 0;
    border-radius: 0;
    width: 100vw;
`;