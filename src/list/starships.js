import React, {Component} from 'react';
import Service from "../services/service";
import ItemDetails from "./itemDetails";
import ListItems from "./list-items";
import Row from "./row";


class Starships extends Component {
    localService = new Service();

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
        const {getAllStarships, getStarship, getStarshipImage} = this.localService
        const {star} = this.state
        // console.debug(this.state.star)
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
        );
    }
}

export default Starships;