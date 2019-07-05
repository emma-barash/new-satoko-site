import React from 'react';
import { Link } from 'react-router-dom';
import { 
    HomeTitle,
    HomeContainer
} from '../elements/index.js';

const HomePage = () => {
    return (
        <HomeContainer>
                <Link className="homeLink" to="/main"><HomeTitle>Satoko Barash Ceramics</HomeTitle></Link>
        </HomeContainer>
    );
};

export default HomePage;