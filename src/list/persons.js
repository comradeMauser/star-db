import React, {Component} from 'react';
import ItemDetails from "./itemDetails";
import ListItems from "./list-items";
import Row from "./row";
import {Consumer} from "../services/context"


class Persons extends Component {

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
        const {person} = this.state
        // console.debug(this.state.person)
        return (
            <Consumer>
                {({getAllPersons, getPerson, getPersonImage}) => {
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
                    )
                }}
            </Consumer>
        );
    }
}

export default Persons;