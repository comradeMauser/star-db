import React from 'react';
import r2d2 from "./r2d2.png"
import "./error-indicator.css";


const ErrorIndicator = () => {
    return (
        <div>
            gotta fix that shit
            <figure  className="errIndicator">
                <img src={r2d2} alt="error"/>
            </figure>
        </div>
    );
};

export default ErrorIndicator;