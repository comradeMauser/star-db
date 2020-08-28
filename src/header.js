import React from 'react';
import "./header.css";


const Header = () => {
    return (
        <div className="container">

            <nav className="navbar-expand navbar-outline-light bg-dark">
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/#">Home</a>
                        </li><li className="nav-item">
                            <a className="nav-link" href="/planets">Planets</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/persons">Persons</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/starships">Starships</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/vehicles">Vehicles</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;