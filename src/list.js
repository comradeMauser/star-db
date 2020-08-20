import React from 'react';
import Loader from "react-loader-spinner";
import Person from "./details/person";
import Starship from "./details/starship";
import ListItems from "./list-items";
import Service from "./services/service";


class List extends React.Component {

    localService = new Service();

    state = {
        person: {},
        loading: true,
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


    render() {
        const {person, loading} = this.state;
        const {getAllPersons, getStarship} = this.localService

        if (loading) {
            return <Loader type="Rings" color="yellow"/>
        }
        return (
            <div className="row">
                <div className="col-5">
                    <ListItems listItems={getAllPersons} getItem={this.getPerson}/>
                    <ListItems listItems={this.localService.getAllStarships} getItem={this.getPerson}/>
                    {/*<ListItems listItems={this.localService.getAllPlanets} getItem={this.getPerson}/>*/}
                    {/*<ListItems listItems={this.localService.getAllVehicles} getItem={this.getPerson}/>*/}
                </div>
                <div className="col-6">
                    <Person person={person}/>
                    <Starship id={22} getData={getStarship}/>
                </div>
            </div>
        )
    }
}

export default List;