import React, {Component} from 'react';
import ItemDetails from "./itemDetails";
import ListItems from "./list-items";
import Row from "./row";
import {Consumer} from "../services/context"


class Persons extends Component {

    state = {
        id: 23,
        fields: ["birth", "eye", "height", "mass"],
    }

    getPersonId = (id) => {
        // const {fields} = this.state.person
        this.setState({id})
    };

    componentDidMount(): void {
        const {itemId} = this.props
        if (itemId) {
            this.setState({id: itemId})
        }
    }

    /*
        componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
            const {itemId} = this.props
            if (this.props.itemId !== prevProps.itemId) {
                this.setState({id: itemId})
            }
            console.log(this.state.id)
        }
    */

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
                                               getItemId={this.getPersonId}
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