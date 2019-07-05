import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AboutArtist extends Component {
    constructor(){
        super();
        this.state = {

        };
    };
    
    render() {
        return (
            <div>
                <Link className="linkedPage" to="/main">Main</Link>
                About the Artist
            </div>
        )
    }
}
