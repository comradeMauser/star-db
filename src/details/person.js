import React from 'react';
import "./person.css";
import Loader from "react-loader-spinner";

const Person = ({person}) => {
    const {id, name, birth, eye, height, mass} = person

    if (!id) {
        return <Loader type="Rings" color="yellow"/>
    }
    return (
        <div className="person row">
            <ul className="list-group col-6">
                <li className="list-group-item text-center text-warning" > {name}</li>
                <li className="list-group-item"> birth: {birth}</li>
                <li className="list-group-item"> eye: {eye}</li>
                <li className="list-group-item"> height: {height}</li>
                <li className="list-group-item">mass: {mass}</li>
            </ul>
            <figure className="person-figure col-4">
                <img className="person-img" src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                     alt="person"/>
            </figure>
        </div>
    );
};

export default Person;