import React, {Component} from 'react';
import Service from "../services/service";
import ItemDetails from "./itemDetails";
import ListItems from "./list-items";
import Row from "./row";


class Vehicles extends Component {
    localService = new Service();

    state = {
        vehicle: {
            id: 4,
            fields: ["model", "crew", "cargo", "class",]
        },
    }

    getVehicleId = (id) => {
        const {fields} = this.state.vehicle
        this.setState({vehicle: {id: id, fields: fields}})
    };

    render() {
        const {getAllVehicles, getVehicle, getVehicleImage} = this.localService
        const {vehicle} = this.state
        // console.debug(this.state.vehicle)
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
        );
    }
}

export default Vehicles;