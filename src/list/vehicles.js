import React, {Component} from 'react';
import ItemDetails from "./itemDetails";
import ListItems from "./list-items";
import Row from "./row";
import {Consumer} from "../services/context"


class Vehicles extends Component {

    state = {
        vehicle: {
            id: 4,
            fields: ["model", "crew", "cargo", "class",]
        },
    }

    getVehicleId = (id) => {
        const {fields} = this.state.vehicle
        this.setState({vehicle: {id, fields}})
    };

    render() {
        const {vehicle} = this.state
        // console.debug(this.state.vehicle)
        return (
            <Consumer>
                {({getAllVehicles, getVehicle, getVehicleImage}) => {
                    return (
                        <div>
                            <Row
                                left={
                                    <ListItems listItems={getAllVehicles}
                                               getItemId={this.getVehicleId}
                                    />
                                }
                                right={
                                    <ItemDetails getData={getVehicle}
                                                 getImage={getVehicleImage}
                                                 object={vehicle}
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

export default Vehicles;