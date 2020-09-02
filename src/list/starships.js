import React, {Component} from 'react';
import ItemDetails from "./itemDetails";
import ListItems from "./list-items";
import Row from "./row";
import {Consumer} from "../services/context"
import {withRouter} from "react-router-dom"


class Starships extends Component {

    state = {
        id: 5,
        fields: ["model", "crew", "cost", "passengers"],
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
        // console.debug(this.state.star)
        return (
            <Consumer>
                {({getAllStarships, getStarship, getStarshipImage}) => {
                    return (
                        <div>
                            <Row
                                left={
                                    <ListItems listItems={getAllStarships}
                                               getItemId={this.getItemnId}
                                    />
                                }
                                right={
                                    <ItemDetails getData={getStarship}
                                                 getImage={getStarshipImage}
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

export default withRouter(Starships);