import React, { Component } from 'react';
import { 
    AboutContainer,
    Satoko,
    IMG,
    ArtistTitle,
    Pronunciation
} from '../elements/index.js';
import { Link } from 'react-router-dom';

export default class AboutArtist extends Component {
    constructor(){
        super();
        this.state = {

        };
    };
    
    render() {
        return (
            <AboutContainer>
                <Link className="linkedPage" to="/main">Main</Link>
                <IMG><Satoko src="https://www.northcoastartists.org/uploads/1/2/1/2/12129626/satoko-potting2_orig.jpeg" alt="Satoko Barash at the pottery wheel"/></IMG>
                <div className="centerTitle">
                    <ArtistTitle>さとこ</ArtistTitle>
                    <Pronunciation>( s a - t o - k o )</Pronunciation>
                </div>
            </AboutContainer>
        )
    }
}
