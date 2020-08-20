import React from 'react';
import Loader from "react-loader-spinner";
import Person from "./details/person";
import Starship from "./details/starship";
import ListItems from "./list-items";
import Service from "./services/service";


const StarFields = ({dataField, field, label}) => {
    return (
        <ul className="list-group col-6">
            <li className="list-group-item text-center text-warning"> {label}</li>
            <li className="list-group-item"> {field}: {dataField[label]}</li>
            <li className="list-group-item"> {field}: {dataField[label]}</li>
            <li className="list-group-item"> {field}: {dataField[label]}</li>
            <li className="list-group-item"> {field}: {dataField[label]}</li>
        </ul>
    );
};

class List extends React.Component {

    localService = new Service();

    state = {
        person: {},
        loading: true,
        elementId: 2
    };

    componentDidMount() {
        this.setState({loading: false})
    }

    getPerson = (id) => {
        this.localService.getPerson(id)
            .then((person) => {
                this.setState({person})
            })
        // console.log("person:", this.state.person)
    };

    getElementId = (itemListId) => {
        this.setState({elementId: itemListId})
    }

    render() {
        const {person, loading, elementId} = this.state;
        const {getAllPersons, getStarship, getStarshipImage} = this.localService
        console.debug("elementId", elementId)

        if (loading) {
            return <Loader type="Rings" color="yellow"/>
        }
        return (
            <div className="row">
                <div className="col-5">
                    <ListItems listItems={getAllPersons} getItem={this.getPerson}/>
                    <ListItems listItems={this.localService.getAllStarships} getItem={this.getElementId}/>
                    {/*<ListItems listItems={this.localService.getAllPlanets} getItem={this.getPerson}/>*/}
                    {/*<ListItems listItems={this.localService.getAllVehicles} getItem={this.getPerson}/>*/}
                </div>
                <div className="col-6">
                    <Person person={person}/>

                    <Starship dataId={elementId} getData={getStarship} getImage={getStarshipImage}>
                        <StarFields field="Dildo" label="Master"/>
                    </Starship>
                </div>
            </div>
        )
    }
}

export default List;