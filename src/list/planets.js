import React, {Component} from 'react';
import Service from "../services/service";
import ItemDetails from "./itemDetails";
import ListItems from "./list-items";
import Row from "./row";


class Planets extends Component {
    localService = new Service();

    state = {
        planet: {
            id: 9,
            fields: ["climate", "diameter", "population", "rotationPeriod"]
        },
    }

    getPlanetId = (id) => {
        const {fields} = this.state.planet
        this.setState({planet: {id: id, fields: fields}})
    };

    render() {
        const {getAllPlanets, getPlanet, getPlanetImage} = this.localService
        const {planet} = this.state
        // console.debug(this.state.planet)
        return (
            <div>
                <Row
                    left={
                        <ListItems listItems={getAllPlanets}
                                   getItemId={this.getPlanetId}
                        />
                    }
                    right={
                        <ItemDetails getData={getPlanet}
                                     getImage={getPlanetImage}
                                     object={planet}
                        />
                    }
                />
            </div>
        );
    }
}

export default Planets;