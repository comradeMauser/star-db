import React, {Component} from 'react';
import ItemDetails from "./itemDetails";
import ListItems from "./list-items";
import Row from "./row";
import {Consumer} from "../services/context"


class Planets extends Component {

    state = {
        planet: {
            id: 9,
            fields: ["climate", "diameter", "population", "rotationPeriod"]
        },
    }

    getPlanetId = (id) => {
        const {fields} = this.state.planet
        this.setState({planet: {id, fields}})
    };

    render() {
        const {planet} = this.state
        // console.debug(this.state.planet)
        return (
            <Consumer>
                {({getAllPlanets, getPlanet, getPlanetImage}) => {
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
                    )
                }}
            </Consumer>
        );
    }
}

export default Planets;