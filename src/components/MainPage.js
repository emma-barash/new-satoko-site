import React from 'react';
import NavBar from './NavBar.js';
import { 
    MainContainer,
    AboutSquare,
    OverlayTitle,
    ASTwo,
    ASThree
} from '../elements/index.js';

const MainPage = () => {
    return (
        <MainContainer>
            <NavBar />
            <AboutSquare><OverlayTitle>Last Kiln Firing</OverlayTitle></AboutSquare>
            <ASTwo><OverlayTitle>North Coast Artists Gallery</OverlayTitle></ASTwo>
            <ASThree><OverlayTitle>More</OverlayTitle></ASThree>
        </MainContainer>
    );
};

export default MainPage;