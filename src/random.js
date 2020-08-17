import React from 'react';
import ErrorIndicator from "./services/error-indicator";
import Service from "./services/service";
import Spinner from "./services/spinner";
import "./random.css";


class Random extends React.Component {
    /*
        constructor() {
            super();
            this.upd()
        }
    */

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
        this.setState(
            {
                planet,
                loading: false,
                erroe: false,
            })
    };

    //gets object data from service
    upd = () => {
        const id = Math.floor(Math.random() * 60) + 1
        this.localService.getPlanet(id).then(this.updState)
    };

    //test function: toggle for "loading"
    load = () => {
        this.setState({
            loading: !this.state.loading, error: false
        })
    };

    //test function: toggle for "loading"
    err = () => {
        this.setState({
            error: !this.state.error, loading: false
        })
    }


    render() {
        const {planet, loading, error} = this.state

        const content = !loading && !error ? <Content planet={planet} upd={this.upd} load={this.load}/> : null;
        const indicator = error ? <ErrorIndicator/> : null;
        const spinner = loading ? <Spinner/> : null;

        return (
            <div className="random justify-content-center">

                {content}
                {indicator}
                {spinner}

                {/*test buttons*/}
                <button className="btn-block btn-outline-info" onClick={() => {
                    this.upd()
                }}>test Random component: f()update
                </button>
                <button className="btn-block btn-outline-warning" onClick={() => {
                    this.load()
                }}>test Random component: f()loading true/false
                </button>
                <button className="btn-block btn-outline-danger" onClick={() => {
                    this.err()
                }}>test Random component: f()error true/false
                </button>

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