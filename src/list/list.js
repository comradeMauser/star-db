import React from 'react';
import Loader from "react-loader-spinner";
import ItemDetails from "./itemDetails";
import ListItems from "./list-items";
import Row from "./row";
import Service from "../services/service";


class List extends React.Component {

    localService = new Service();

    state = {
        loading: true,

        person: {
            id: 23,
            fields: ["birth", "eye", "height", "mass"]
        },

        star: {
            id: 5,
            fields: ["model", "crew", "cost", "passengers"]
        },

        planet: {
            id: 1,
            fields: ["climate", "diameter", "population", "rotationPeriod"]
        },

        vehicle: {
            id: 4,
            fields: ["model", "crew", "cargo", "class",]
        },
    };

    componentDidMount() {
        this.setState({loading: false})
    }

    getStarId = (id) => {
        const {fields} = this.state.star
        this.setState({star: {id: id, fields: fields}})
    };

    getPersonId = (id) => {
        const {fields} = this.state.person
        this.setState({person: {id: id, fields: fields}})
    };

    getVehicleId = (id) => {
        const {fields} = this.state.vehicle
        this.setState({vehicle: {id: id, fields: fields}})
    };

    getPlanetId = (id) => {
        const {fields} = this.state.planet
        this.setState({planet: {id: id, fields: fields}})
    };

    render() {
        const {loading, star, person, vehicle, planet} = this.state;
        const {
            getAllStarships, getStarship, getStarshipImage,
            getAllPersons, getPerson, getPersonImage,
            getAllVehicles, getVehicle, getVehicleImage,
            getAllPlanets, getPlanet, getPlanetImage
        } = this.localService

        if (loading) {
            return <Loader type="Rings" color="yellow"/>
        }
        return (
            <div className="container row">

                <Row
                    left={
                        <ListItems listItems={getAllStarships}
                                   getItemId={this.getStarId}/>
                    }
                    right={
                        <ItemDetails getData={getStarship}
                                     getImage={getStarshipImage}
                                     object={star}
                        />
                    }
                />

                <Row
                    left={
                        <ListItems listItems={getAllPersons}
                                   getItemId={this.getPersonId}/>
                    }
                    right={
                        <ItemDetails getData={getPerson}
                                     getImage={getPersonImage}
                                     object={person}
                        />
                    }
                />

                <Row
                    left={
                        <ListItems listItems={getAllVehicles}
                                   getItemId={this.getVehicleId}/>
                    }
                    right={
                        <ItemDetails getData={getVehicle}
                                     getImage={getVehicleImage}
                                     object={vehicle}
                        />
                    }
                />

                <Row
                    left={
                        <ListItems listItems={getAllPlanets}
                                   getItemId={this.getPlanetId}/>
                    }
                    right={
                        <ItemDetails getData={getPlanet}
                                     getImage={getPlanetImage}
                                     object={planet}
                        />
                    }
                />
            </div>
        )
    }
}

export default List;