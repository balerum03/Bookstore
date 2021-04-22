import React from 'react';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';


const Navigation = () => (
    <nav className="panel-bg">
        <div className="nav-title">
            <h1 className="Bookstore-CMS">BookStore CMS</h1>
            <a href="#">Books</a>
            <a href="#">Categories</a>
        </div>
        <div>
            <FontAwesomeIcon icon={faUserCircle} size="lg" className="user-icon"/>
        </div>
    </nav>
);

export default Navigation;