import React, {Component} from 'react';
import ItemDetails from "./itemDetails";
import ListItems from "./list-items";
import Row from "./row";
import {Consumer} from "../services/context"
import {withRouter} from "react-router-dom"


class Planets extends Component {

    state = {
        id: 9,
        fields: ["climate", "diameter", "population", "rotationPeriod"],
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
        // console.debug(this.state.planet)
        return (
            <Consumer>
                {({getAllPlanets, getPlanet, getPlanetImage}) => {
                    return (
                        <div>
                            <Row
                                left={
                                    <ListItems listItems={getAllPlanets}
                                               getItemId={this.getItemnId}
                                    />
                                }
                                right={
                                    <ItemDetails getData={getPlanet}
                                                 getImage={getPlanetImage}
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

export default withRouter(Planets);