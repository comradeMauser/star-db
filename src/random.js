import React from 'react';
import ErrorIndicator from "./services/error-indicator";
import Service from "./services/service";
import Spinner from "./services/spinner";
import "./random.css";
import TestButtons from "./test-buttons";


class Random extends React.Component {
    constructor() {
        console.log("constructor")
        super();
        this.upd()
    }

    localService = new Service();

    state = {
        planet: {
            id: 2, //temporary plug: 0 and 1 do not have pictures
            name: "name",
            climate: "climate",
            diameter: "diameter",
            population: "population",
            rotationPeriod: "rotationPeriod",
        },
        loading: true,
        error: false,
    };

    updState = (planet) => {
        console.log("upd=>updState")
        this.setState(
            {
                planet,
                loading: false,
                error: false,
            })
    };

    //gets object data from service
    upd = () => {
        // const id = Math.floor(Math.random() * 60) + 1
        const id = 300
        this.localService.getPlanet(id)
            .then(this.updState)
            .catch((error) => this.errCatch(error))
    };

    //test function: toggle for "loading"
    load = () => {
        this.setState({
            loading: !this.state.loading, error: false
        })
    };

    //test function: toggle for "error"
    errCatch = (err) => {
        this.setState({
            error: !this.state.error, loading: false
        });
        console.error("errCatch:", err)
    };

    render() {
        console.log("render")
        const {planet, loading, error} = this.state

        const content = !loading && !error ? <Content planet={planet}/> : null;
        const indicator = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;

        return (
            <div className="random justify-content-center">
                Допилить life hooks
                {content}
                {indicator}
                {spinner}
                <TestButtons upd={this.upd} load={this.load} err={this.errCatch}/>
            </div>
        )
    }
}

export default Random;


//Fragment
const Content = (props) => {
    const {id, name, climate, diameter, population, rotationPeriod} = props.planet;

    return (
        <React.Fragment>
            Random Planet - id: {id}
            <div className="container d-flex justify-content-center">
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
        </React.Fragment>
    )
};