import React, {Component} from 'react';
import ItemDetails from "./itemDetails";
import ListItems from "./list-items";
import Row from "./row";
import {Consumer} from "../services/context"
import {withRouter} from "react-router-dom"


class Vehicles extends Component {

    state = {
        id: 4,
        fields: ["model", "crew", "cargo", "class",],
    };

    getItemnId = (id) => {
        const {history} = this.props
        this.setState({id})
        history.push(id)
    };

    componentDidMount() {
        const {itemId} = this.props
        if (itemId) {
            this.setState({id: itemId})
        }
    };


    render() {
        const {fields, id} = this.state
        // console.debug(this.state.vehicle)
        return (
            <Consumer>
                {({getAllVehicles, getVehicle, getVehicleImage}) => {
                    return (
                        <div>
                            <Row
                                left={
                                    <ListItems listItems={getAllVehicles}
                                               getItemId={this.getItemnId}
                                    />
                                }
                                right={
                                    <ItemDetails getData={getVehicle}
                                                 getImage={getVehicleImage}
                                                 fields={fields}
                                                 itemId={id}
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

export default withRouter(Vehicles);