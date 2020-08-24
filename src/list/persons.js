import React, {Component} from 'react';
import Service from "../services/service";
import ItemDetails from "./itemDetails";
import ListItems from "./list-items";
import Row from "./row";


class Persons extends Component {
    localService = new Service();

    state = {
        person: {
            id: 23,
            fields: ["birth", "eye", "height", "mass"]
        },
    }

    getPersonId = (id) => {
        const {fields} = this.state.person
        this.setState({person: {id: id, fields: fields}})
    };

    render() {
        const {getAllPersons, getPerson, getPersonImage} = this.localService
        const {person} = this.state
        // console.debug(this.state.person)
        return (
            <div>
                <Row
                    left={
                        <ListItems listItems={getAllPersons}
                                   getItemId={this.getPersonId}
                        />
                    }
                    right={
                        <ItemDetails getData={getPerson}
                                     getImage={getPersonImage}
                                     object={person}
                        />
                    }
                />
            </div>
        );
    }
}

export default Persons;