import React from 'react';
import spinner from "./spinner(loader).svg";
import "./spinner.css"


const Spinner = () => {
    return (
        <div>
            ...loading...
            <figure className="spinner">
                <img src={spinner} alt="spinner"/>
            </figure>
        </div>
    );
};

export default Spinner;