import React from 'react';
import { Link } from 'react-router-dom';
import { 
    HomeTitle,
    HomeContainer
} from '../elements/index.js';

const HomePage = () => {
    return (
        <HomeContainer>
                <HomeTitle><Link className="homeLink" to="/main">Satoko Barash Ceramics</Link></HomeTitle>
        </HomeContainer>
    );
};

export default HomePage;