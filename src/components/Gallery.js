import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            </div>
        )
    }
}
