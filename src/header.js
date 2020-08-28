import React from 'react';
import "./header.css";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className="container">
            <ul className="d-flex list-unstyled">
                <li className="list-group-item">
                    <Link to="/#">Home</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/planets">Planets</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/persons">Persons</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/starships">Starships</Link>
                </li>
                <li className="list-group-item">
                    <Link to="/vehicles">Vehicles</Link>
                </li>
                <li className="list-group-item">very important button</li>
            </ul>
        </div>
    );
};

export default Header;