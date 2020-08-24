import React, {Component} from 'react';
import ItemDetails from "./itemDetails";
import ListItems from "./list-items";
import Row from "./row";
import {Consumer} from "../services/context"


class Starships extends Component {

    state = {
        star: {
            id: 5,
            fields: ["model", "crew", "cost", "passengers"]
        },
    }

    getStarshipId = (id) => {
        const {fields} = this.state.star
        this.setState({star: {id: id, fields: fields}})
    };

    render() {
        const {star} = this.state
        // console.debug(this.state.star)
        return (
            <Consumer>
                {({getAllStarships, getStarship, getStarshipImage}) => {
                    return (
                        <div>
                            <Row
                                left={
                                    <ListItems listItems={getAllStarships}
                                               getItemId={this.getStarshipId}
                                    />
                                }
                                right={
                                    <ItemDetails getData={getStarship}
                                                 getImage={getStarshipImage}
                                                 object={star}
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

export default Starships;