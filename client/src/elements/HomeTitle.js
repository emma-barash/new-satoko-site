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
    padding: 0 0 35px 0;
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

export const ArtistTitle = styled(HomeTitle)`
    padding-top: 5px;
    font-size: 45px;
    margin: 10px auto;
    font-family: julie;
    font-weight: lighter; 
`;

export const Pronunciation = styled(HomeTitle)`
    font-size: 35px;
    margin: 0 auto;
    padding-top: 0;
`;

export const SignIn = styled(HomeTitle)`
    padding-top: 3%;
    margin: auto;
`;

export const GalleryTitle = styled(HomeTitle)`
    font-size: 55px;
    margin-top: 90px;
    height: 70vh;
    background-color: brown;
    padding: 20% 5% 20% 5%;
    margin: auto auto auto 20px;
`;