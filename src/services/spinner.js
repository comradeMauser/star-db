import React from 'react';
import spinner from "./spinner(loader).svg";
import "./spinner.css"


const Spinner = () => {
    return (
        <figure className="spinner">
            <img src={spinner} alt="spinner"/>
        </figure>
    );
};

export default Spinner;