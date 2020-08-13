import React from 'react';
import Service from "./service";
import "./random.css"

class Random extends React.Component {

    localService = new Service()
    state = {
        name: "name",
        climate: "climate",
        diameter: "diameter",
        population: "population",
        rotationPeriod: "rotationPeriod",
    }


    upd() {
        this.localService.getPlanet(4).then((planet) => {
            this.setState({
                name: planet.name,
                climate: planet.climate,
                diameter: planet.diameter,
                population: planet.population,
                rotationPeriod: planet.rotation_period,
            })
        })
    }

    render() {
        const {name, climate, diameter, population, rotationPeriod} = this.state
        return (
            <div className="random">
                Random block(Planet)
                <div className="d-flex">
                    <img className="randomImage" src="https://starwars-visualguide.com/assets/img/planets/2.jpg" alt="planet"/>
                    <li style={{listStyleType: "none"}}>
                        <ul>name: {name}</ul>
                        <ul>climate: {climate}</ul>
                        <ul>diameter: {diameter}</ul>
                        <ul>population: {population}</ul>
                        <ul>rotation period: {rotationPeriod}</ul>
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