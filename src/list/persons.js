import React, {Component} from 'react';
import ItemDetails from "./itemDetails";
import ListItems from "./list-items";
import Row from "./row";
import {Consumer} from "../services/context"
import {withRouter} from "react-router-dom"


class Persons extends Component {

    state = {
        id: 23,
        fields: ["birth", "eye", "height", "mass"],
    };

    getItemnId = (id) => {
        const {history} = this.props
        this.setState({id})
        history.push(`persons/${id}/`)
    };

    componentDidMount() {
        const {itemId} = this.props
        if (itemId) {
            this.setState({id: itemId})
        }
    };


    render() {
        const {fields, id} = this.state
        console.debug("state id:", this.state.id)
        console.debug("props:", this.props)
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

export default withRouter(Persons);