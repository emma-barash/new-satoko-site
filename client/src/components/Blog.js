import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
    return (
        <div>
            <Link className="linkedPage" to="/main">Main</Link>
            Welcome to the Blog Page
        </div>
    );
};

export default Blog;
