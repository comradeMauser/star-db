import React, {Component} from 'react';
import ItemDetails from "./itemDetails";
import ListItems from "./list-items";
import Row from "./row";
import {Consumer} from "../services/context"


class Persons extends Component {

    state = {
        id: 23,
        fields: ["birth", "eye", "height", "mass"],
    };

    getItemnId = (id) => {
        this.setState({id})
    };

    componentDidMount(){
        const {itemId} = this.props
        if (itemId) {
            this.setState({id: itemId})
        }
    };

    render() {
        const {fields, id} = this.state
        console.debug(this.state.id)
        return (
            <Consumer>
                {({getAllPersons, getPerson, getPersonImage}) => {
                    return (
                        <div>
                            <Row
                                left={
                                    <ListItems listItems={getAllPersons}
                                               getItemId={this.getItemnId}
                                    />
                                }
                                right={
                                    <ItemDetails getData={getPerson}
                                                 getImage={getPersonImage}
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

export default Persons;