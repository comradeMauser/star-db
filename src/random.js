import React from 'react';
import Service from "./service";
import "./random.css"

class Random extends React.Component {

    localService = new Service();

    state = {
        planet: {
            id: 2, //temporary plug: 0 and 1 do not have pictures
            name: "name",
            climate: "climate",
            diameter: "diameter",
            population: "population",
            rotationPeriod: "rotationPeriod",
        }
    };


    updState = (planet) => {
        this.setState({planet: planet})
        console.log("planet:", planet)
    }

    upd() {
        const id = Math.floor(Math.random() * 60) + 1
        this.localService.returnPlanetData(id).then(this.updState)
    };


    render() {
        const {
            planet: {
                id, name, climate, diameter, population, rotationPeriod
            }
        } = this.state
        return (
            <div className="random">
                Random block(Planet id: {id})
                <div className="d-flex justify-content-center">
                    <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
                         alt="random"/>
                    <li className="list-group">
                        <ul className="list-group-item">name: {name}</ul>
                        <ul className="list-group-item">climate: {climate}</ul>
                        <ul className="list-group-item">diameter: {diameter}</ul>
                        <ul className="list-group-item">population: {population}</ul>
                        <ul className="list-group-item">rotation period: {rotationPeriod}</ul>
                    </li>
                </div>
                <button className="btn-block btn-outline-warning" onClick={() => {
                    this.upd()
                }}>test Random component: f()update
                </button>
            </div>
        )
    }
}

export default Random;