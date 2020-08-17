import React from 'react';
import Service from "./services/service";
import Spinner from "./services/spinner";
import "./random.css";


class Random extends React.Component {

    localService = new Service();

    state = {
        // planet: {},
        planet: {
            id: 2, //temporary plug: 0 and 1 do not have pictures
            name: "name",
            climate: "climate",
            diameter: "diameter",
            population: "population",
            rotationPeriod: "rotationPeriod",
        },
        loading: true
    };

    updState = (planet) => {
        this.setState(
            {
                planet,
                loading: false
            })
        console.log("planet:", planet)
        console.log("state:", this.state)
    };

    //gets object data from service
    upd = () => {
        const id = Math.floor(Math.random() * 60) + 1
        this.localService.getPlanet(id).then(this.updState)
    };

    //test function: toggle for "loading"
    load = () => {
        console.log("loading:", this.state.loading)
        this.setState({loading: !this.state.loading})
    }


    render() {
        const {planet, loading} = this.state

        const content = loading ? <Spinner/> : <Content planet={planet} upd={this.upd} load={this.load}/>

        if (loading) {
            return (
                <div>
                    <Spinner/>
                                        {/*test buttons*/}
                    <button className="btn-block btn-outline-warning" onClick={() => {
                        this.upd()
                    }}>test Random component: f()update
                    </button>
                    <button className="btn-block btn-outline-danger" onClick={() => {
                        this.load()
                    }}>test Random component: f()loading true/false
                    </button>
                </div>)
        }
        return (
            <div className="random">
                {content}
            </div>
        )
    }
}

export default Random;

//Fragment
const Content = (props) => {

    const {id, name, climate, diameter, population, rotationPeriod} = props.planet;
    const {upd, load} = props;

    return (
        <React.Fragment>
            Random block(Planet id: {id})
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
            <button className="btn-block btn-outline-warning" onClick={() => {
                upd()
            }}>test Random component: f()update
            </button>
            <button className="btn-block btn-outline-danger" onClick={() => {
                load()
            }}>test Random component: f()loading true/false
            </button>
        </React.Fragment>
    )
};