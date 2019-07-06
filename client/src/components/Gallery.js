import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { GalleryFlex } from '../elements/index.js';

export default class Gallery extends Component {
    constructor(){
        super();
        this.state = {

        };
    };
    render() {
        return (
            <div>
                <Link className="linkedPage" to="/main">Main</Link>
                Welcome to the Gallery
                <div className="centerText">
                    <GalleryFlex>
                        <img />
                        <img />
                        <img />
                        <img />
                        <img />
                        <img />
                    </GalleryFlex>
                </div>
            </div>
        )
    }
}
