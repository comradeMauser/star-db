import React from 'react';
import Person from "./details/person";
import ListItems from "./list-items";
import ErrorButton from "./services/error-button";
import ErrorIndicator from "./services/error-indicator";
import Service from "./services/service";


class List extends React.Component {

    localService = new Service();

    state = {
        person: {},
        loading: true,
        error: false
    };

    /*//creates list with person names
    getList = () => {
        console.log("getList")

        this.localService.getAllPersons()
            .then((persons) => {
                this.setState({persons})
            })
            .catch((err) => this.errCatch(err));
    };*/

    //updates component 'Person' with new props
    getPerson = (id) => {
        this.localService.getPerson(id)
            .then((person) => {
                this.setState({person})
            })
        console.log("person:", this.state.person)
    };

    errCatch = (err) => {
        this.setState({
            error: !this.state.error, loading: false
        });
        console.error("errCatch:", err)
    };

    componentDidMount() {
    };

   /* componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.person.id !== prevState.person.id) {
            this.getPerson(this.state.person.id)
        }
    };*/

    componentDidCatch(error, errorInfo) {
        this.setState({error: true})
    }

    render() {
        const {person, error} = this.state;

        if (error) {
            return <ErrorIndicator/>
        }
        return (
            <div className="row">
                <div className="col-5">
                    <ListItems listItems={this.localService.getAllPersons} getItem={this.getPerson}/>
                    <ListItems listItems={this.localService.getAllPlanets} getItem={this.getPerson}/>
                    <ListItems listItems={this.localService.getAllStarships} getItem={this.getPerson}/>
                    <ListItems listItems={this.localService.getAllVehicles} getItem={this.getPerson}/>
                </div>
                <div className="col-6">
                    <Person person={person}/>
                    <ErrorButton/>
                </div>
            </div>
        )
    }
}

export default List;