import React from 'react';
import r2d2 from "./error(r2d2).png"
import "./error-indicator.css";


const ErrorIndicator = () => {
    return (
        <div>
            <figure className="col errIndicator">
                <img src={r2d2} alt="error"/>
                <span className="errMessage">gotta fix that shit</span>
            </figure>
        </div>
    );
};

export default ErrorIndicator;