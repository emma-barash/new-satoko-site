import React from 'react';
import HomePage from './components/HomePage.js';
import MainPage from './components/MainPage.js';
import AboutArtist from './components/AboutArtist.js';
import Gallery from './components/Gallery.js';
import Auth from './components/Auth.js';
import Blog from './components/Blog.js';
import { Switch, Route } from 'react-router-dom';
import './elements/styles.css';

const App = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/"         component={ HomePage }    />
                <Route       path="/main"     component={ MainPage }    />
                <Route       path="/gallery"  component={ Gallery }     />
                <Route       path="/about"    component={ AboutArtist } />
                <Route       path="/auth"     component={ Auth }        />
                <Route       path="/blog"     component={ Blog }        />
            </Switch>
        </div>
    );
};

export default App;