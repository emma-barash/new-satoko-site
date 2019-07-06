import styled from 'styled-components';

export const AboutSquare = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    flex-flow: column;
    justify-content: center;
    justify-items: center;
    margin-top: 7%;
    padding: 30px;
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
    padding-left: 20px;
    margin-top: 15px;
    position: relative;
    height: 40%;
    float: right;
    width: 18vw;
    margin-right: 15px;
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
    left:0;
`;